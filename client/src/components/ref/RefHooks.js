import React, { useCallback, useMemo, useRef } from 'react';
import { StyledRef, StyledRefBlock, StyledRefLink, StyledRefTitle } from './StyledRef';

const data = ['Title 1', 'Title 2', 'Title 3'];

export default function RefHooks() {
    const containerRef = useRef();
    const refs = useRef([]);
    let refsTopCoords = useMemo(() => data.map((i, index) => refs[index].current.getBoundingClientRect().top), []);
    let containerTop = useMemo(() => containerRef.current.getBoundingClientRect().top, []);

    const onLinkClick = useCallback(
        index => e => {
            e.preventDefault();

            const containerEl = containerRef.current;

            containerEl.scrollTo({
                top: refsTopCoords[index] - containerTop,
                left: 0,
                // использую scroll-behavior: smooth (can be auto or smooth) в css
                // behavior: 'smooth'
            });
        },
        [containerTop, refsTopCoords]
    );

    return (
        <>
            <StyledRefLink href='/' onClick={onLinkClick(0)}>
                title 1
            </StyledRefLink>
            <StyledRefLink href='/' onClick={onLinkClick(1)}>
                title 2
            </StyledRefLink>
            <StyledRefLink href='/' onClick={onLinkClick(2)}>
                title 3
            </StyledRefLink>
            <StyledRef ref={containerRef}>
                {data.map((title, index) => (
                    <StyledRefBlock key={title}>
                        <StyledRefTitle ref={el => (refs.current[index] = el)}>{title}</StyledRefTitle>
                    </StyledRefBlock>
                ))}
            </StyledRef>
        </>
    );
}
