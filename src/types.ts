export interface DarkModeToggleProps {
    onChange?: (mode: 'light' | 'dark') => void;
    initialMode?: 'light' | 'dark';
    className?: string;
    iconSize?: number;
    trackColor?: {
      light: string;
      dark: string;
    };
    thumbColor?: {
      light: string;
      dark: string;
    };
  }