interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

interface FontSize {
  text: number;
  small: number;
  h1: number;
  medium: number;
  large: number;
}

interface BorderRadii {
  sm: number;
  md: number;
  lg: number;
  card: number;
}

interface ExtendedTheme extends Theme {
  colors: Theme['colors'] & {
    dark: string;
    accent: string;
    secondary: string;
    error: string;
    transparent: string;
    lightBackground: string;
    white: string;
    darkShade: string;
    inputBackground: string;
    lightInputBackground: string;
    lightText: string;
    darkText: string;
    textLabel: string;
    grayBackground: string;
  };
  spacing: Spacing;
  fonts: FontStyles;
  fontSize: FontSize;
  rounded: BorderRadii;
}

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}
