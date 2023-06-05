import { ReactNode, useMemo, useState } from 'react';

import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
} from '~/app/providers/ThemeProvider/lib/ThemeContext';
import {Theme} from "~/shared/const/theme";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DEFAULT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children?: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { initialTheme, children } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
