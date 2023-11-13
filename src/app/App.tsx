import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { Suspense } from 'react';

import { ToolbarPlugin } from '~/widgets/Toolbar/ui/Toolbar';

function onError(error: any) {
    console.error(error);
}

const theme = {};

const App = () => {
    const initialConfig = {
        namespace: 'MyEditor',
        theme,
        onError,
    };

    return (
        <Suspense fallback="">
            <div className="">
                <LexicalComposer initialConfig={initialConfig}>
                    <ToolbarPlugin />
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable className="contentEditable" />
                        }
                        placeholder={
                            <div className="placeholder">
                                Enter some text...
                            </div>
                        }
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <HistoryPlugin />
                </LexicalComposer>
            </div>
        </Suspense>
    );
};

export default App;
