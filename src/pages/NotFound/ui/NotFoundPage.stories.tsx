import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotFound } from '..';

export default {
    title: 'pages/NotFoundPage',
    component: NotFound,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = () => <NotFound />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
