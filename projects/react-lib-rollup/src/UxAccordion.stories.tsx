import React from 'react';

import UxAccordion from './accordion/accordion.component';
import { Meta } from '@storybook/react';

export default {
    title: 'UxAccordion/With title',
    component: UxAccordion,
    argTypes: {},
} as Meta;

const items = [
    {
        header: 'Customer Parameters',
        description:
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi dolorem ducimus eius enim laudantium\n' +
            '            nobis, tempora! Accusantium asperiores aspernatur consequuntur et, incidunt ipsa laborum neque nesciunt,\n' +
            '            velit veniam vitae?',
    },
    {
        header: 'Customer Parameters',
        description:
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi dolorem ducimus eius enim laudantium\n' +
            '            nobis, tempora! Accusantium asperiores aspernatur consequuntur et, incidunt ipsa laborum neque nesciunt,\n' +
            '            velit veniam vitae?',
    },
    {
        header: 'Customer Parameters',
        description:
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi dolorem ducimus eius enim laudantium\n' +
            '            nobis, tempora! Accusantium asperiores aspernatur consequuntur et, incidunt ipsa laborum neque nesciunt,\n' +
            '            velit veniam vitae?',
    },
];

const Template = args => {
    return (
        <UxAccordion defaultActiveKey="1">
            {items.map(({ header, description }, index) => (
                <UxAccordion.Item header={header} key={index}>
                    {description}
                </UxAccordion.Item>
            ))}
        </UxAccordion>
    );
};

export const UxAccordionWithCustomTitle = Template.bind({});
UxAccordionWithCustomTitle.args = {
    title: 'My title',
};
