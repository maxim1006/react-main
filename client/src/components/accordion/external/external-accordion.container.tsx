import React, { FC, memo, useEffect, useRef } from 'react';
import styles from './external-accordion.module.scss';
import { ExternalAccordionDataAttrEnum, ExternalAccordionStructureEnum } from './external-accordion.model';

type ExternalAccordionProps = {
    content?: string;
    activeTabSelector?: string;
};

const ExternalAccordionContainer: FC<ExternalAccordionProps> = ({
    activeTabSelector,
    content = `
      <external-accordion>
            <external-accordion-section data-section="section1">
                <external-accordion-header>Header1</external-accordion-header>
                <external-accordion-content>Content1</external-accordion-content>
            </external-accordion-section>
            <external-accordion-section data-section="section2">
                <external-accordion-header>Header2</external-accordion-header>
                <external-accordion-content>Content2</external-accordion-content>
            </external-accordion-section>
      </external-accordion>
`,
}) => {
    const externalAccordionRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        if (!activeTabSelector) return;

        try {
            const activeElement = externalAccordionRef.current.querySelector(activeTabSelector);
            if (!activeElement) return;

            const previousActiveElement = externalAccordionRef.current.querySelector(
                `[${ExternalAccordionDataAttrEnum.DataSectionActive}]`,
            );
            previousActiveElement?.removeAttribute(ExternalAccordionDataAttrEnum.DataSectionActive);
            activeElement.setAttribute(ExternalAccordionDataAttrEnum.DataSectionActive, '');
        } catch (e) {
            //Invalid selector could be a reason of this error
            console.warn(e);
        }
    }, [activeTabSelector]);

    useEffect(() => {
        const element = externalAccordionRef.current;

        const handler = (e: Event) => {
            const element = e.target as HTMLElement;
            if (element.tagName.toLowerCase() !== ExternalAccordionStructureEnum.Header) return;

            showActiveSection(element.parentElement);
        };

        element.addEventListener('click', handler);

        return () => {
            element.removeEventListener('click', handler);
        };
    });

    const showActiveSection = (htmlElement: HTMLElement | null) => {
        if (!htmlElement) {
            return;
        }
        htmlElement.querySelector(ExternalAccordionStructureEnum.Content)?.addEventListener(
            'transitionstart',
            () => {
                htmlElement.scrollIntoView({ behavior: 'smooth' });
            },
            { once: true },
        );

        const activeDataSectionValue = htmlElement.getAttribute(ExternalAccordionDataAttrEnum.DataSectionActive);
        if (activeDataSectionValue !== null && activeDataSectionValue !== undefined) {
            htmlElement.removeAttribute(ExternalAccordionDataAttrEnum.DataSectionActive);
            return;
        }

        externalAccordionRef.current.querySelectorAll(ExternalAccordionStructureEnum.Section).forEach(section => {
            if (section === htmlElement) {
                section.setAttribute(ExternalAccordionDataAttrEnum.DataSectionActive, '');
            } else {
                section.removeAttribute(ExternalAccordionDataAttrEnum.DataSectionActive);
            }
        });
    };

    return <div ref={externalAccordionRef} className={styles.host} dangerouslySetInnerHTML={{ __html: content }} />;
};

export default memo(ExternalAccordionContainer);
