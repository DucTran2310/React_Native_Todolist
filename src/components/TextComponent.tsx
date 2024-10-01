import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';

interface TextComponentProps {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
  styles?: StyleProp<TextStyle>
}

const TextComponent = (props: TextComponentProps) => {

  const {
    text,
    size,
    font,
    color,
    flex,
    styles
  } = props

  return (
    <Text
      style={[
        globalStyles.text, 
        {
          flex: flex ?? 1,
          fontFamily: font ?? fontFamilies.regular,
          fontSize: size ?? 14,
          color: color ?? colors.desc
        },
        styles
      ]}
    >
      {text}
    </Text>
  )
}

export default TextComponent