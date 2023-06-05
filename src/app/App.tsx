import { Suspense } from 'react';
import { isMobile } from 'react-device-detect';

import { useTheme } from '~/app/providers/ThemeProvider';

import { AppRouter } from './providers/router/index';

const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div data-theme={theme} className={isMobile ? 'layout layout-mobile' : 'layout'}>

                <AppRouter />
            </div>
        </Suspense>
    );
};

export default App;
