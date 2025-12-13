import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import fonts, { FontStyles } from '../../theme/fonts';

type Child = string | number | React.ReactElement | null | undefined;

export interface TypographyProps extends TextProps {
  children?: Child | Child[];
  fontStyle?: keyof FontStyles;
  fontSize?: keyof ExtendedTheme['fontSize'];
  fontWeight?: TextStyle['fontWeight'];
  align?: 'left' | 'center' | 'right' | 'auto' | 'justify';
  color?: keyof ExtendedTheme['colors'];
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  style,
  fontStyle = 'regular',
  fontSize = 'text',
  fontWeight,
  align,
  color,
  mb,
  mt,
  ml,
  mr,
  ...props
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <Text
      {...props}
      style={[
        styles.text,
        {
          color: color ? theme.colors[color] : theme.colors.text,
          fontSize: moderateScale(theme.fontSize[fontSize]),
          fontWeight,
        },
        fonts[fontStyle],
        align && { textAlign: align },
        mb && { marginBottom: mb },
        mt && { marginTop: mt },
        ml && { marginLeft: ml },
        mr && { marginRight: mr },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.text,
      ...theme.fonts.regular,
    },
  });
