import type { TextStyle } from 'react-native';

// add more font-family if needed
export interface FontStyles {
  regular: TextStyle;
  medium: TextStyle;
  semibold: TextStyle;
  bold: TextStyle;
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
