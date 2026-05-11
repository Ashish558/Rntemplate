// add more font-family if needed
export interface AppFontStyle {
  fontFamily: string;
}

export interface FontStyles {
  regular: AppFontStyle;
  medium: AppFontStyle;
  semibold: AppFontStyle;
  bold: AppFontStyle;
}

const fonts: FontStyles = {
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  medium: {
    fontFamily: 'Poppins-Medium',
  },
  semibold: {
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
};

export default fonts;
