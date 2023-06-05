import { useContext } from 'react';

import {Theme} from "~/shared/const/theme";

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme?: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.GRAY ? Theme.DEFAULT : Theme.GRAY;

        setTheme!(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
