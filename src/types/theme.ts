export type iTheme = 'light' | 'dark';

export interface iThemeContextType {
    theme: iTheme;
    toggleTheme: () => void;
}

export interface iClerkThemeProviderProps {
    children: React.ReactNode;
}
