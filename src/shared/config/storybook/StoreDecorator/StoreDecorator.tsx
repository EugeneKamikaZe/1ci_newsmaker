import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '~/app/providers/StoreProvider';
import { ReducersList } from '~/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    // loginForm: loginReducer,
    // profile: profileReducer,
    // articleDetails: articleDetailsReducer,
    // addCommentForm: addCommentFormReducer,
    // articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
        (StoryComponent: Story) =>
            (
                <StoreProvider
                    // @ts-ignore
                    initialState={state}
                    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
                >
                    <StoryComponent />
                </StoreProvider>
            );
