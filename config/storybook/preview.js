import { addDecorator } from '@storybook/react';

import i18n from '../../src/shared/config/i18n/i18n';
import { I18nextDecorator } from '../../src/shared/config/storybook/I18NesxDecorator/I18NextDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

export const parameters = {
    i18n,
    locale: 'en',
    locales: {
        en: { value: 'en', right: '🇺🇸', title: 'English' },
        de: { value: 'de', right: '🇩🇪', title: 'Deutsch' },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(I18nextDecorator);
