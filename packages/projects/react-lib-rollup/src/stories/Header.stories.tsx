import React from 'react';
import { Header } from '../components';
import { Story } from '@storybook/react';
import { HeaderProps } from '../components/header/Header';

export default {
    title: 'Example/Header',
    component: Header,
};

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
