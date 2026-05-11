
import { Theme } from '@react-navigation/native';
import fonts from './fonts';
import { FontStyles } from './fonts';

export interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface FontSize {
  text: number;
  small: number;
  h1: number;
  medium: number;
  large: number;
}

export interface BorderRadii {
  sm: number;
  md: number;
  lg: number;
  card: number;
}

export interface ExtendedTheme extends Theme {
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
  appFonts: FontStyles;
  fontSize: FontSize;
  rounded: BorderRadii;
}

const AppTheme: ExtendedTheme = {
  dark: false,
  colors: {
    background: '#F6F6F6',
    dark: '#131313',
    darkShade: '#4A4A4A',
    darkText: '#13131359',
    textLabel: '#878787',
    lightBackground: '#202020',
    lightText: '#00000059',
    card: '#070707',
    text: '#FFFFFF',
    border: '#A9A9A9',
    inputBackground: '#EFEFEF',
    grayBackground: '#ECECEC',
    lightInputBackground: '#E6E6E659',
    primary: '#FFD645',
    accent: '#B5F500',
    secondary: '#FFE815',
    error: '#FF155B',
    notification: '#FFFFFF',
    white: '#F5F5F5',
    transparent: 'transparent',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  fonts: {
    regular: {
      fontFamily: fonts.regular.fontFamily,
      fontWeight: '400',
    },
    medium: {
      fontFamily: fonts.medium.fontFamily,
      fontWeight: '500',
    },
    bold: {
      fontFamily: fonts.bold.fontFamily,
      fontWeight: '700',
    },
    heavy: {
      fontFamily: fonts.bold.fontFamily,
      fontWeight: '700',
    },
  },
  appFonts: fonts,
  fontSize: {
    text: 16,
    small: 14,
    medium: 16,
    large: 20,
    h1: 24,
  },
  rounded: {
    sm: 8,
    md: 16,
    lg: 24,
    card: 35,
  },
};

export default AppTheme;
