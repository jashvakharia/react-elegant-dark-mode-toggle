declare const DarkModeToggle: ({ onChange, initialMode, className, iconSize, trackColor, thumbColor }: {
    onChange: any;
    initialMode?: string | undefined;
    className?: string | undefined;
    iconSize?: number | undefined;
    trackColor?: {
        light: string;
        dark: string;
    } | undefined;
    thumbColor?: {
        light: string;
        dark: string;
    } | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default DarkModeToggle;
