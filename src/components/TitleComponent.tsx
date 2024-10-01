import React from 'react';
import { fontFamilies } from '../constants/fontFamilies';
import TextComponent from './TextComponent';

interface TitleComponentProps {
  text: string;
  size?: number;
  font?: string;
  color?: string 
}

const TitleComponent = (props: TitleComponentProps) => {

  const {
    text,
    size,
    font,
    color
  } = props

  return (
    <TextComponent 
      size={size ?? 20}
      font={font ?? fontFamilies.semiBold}
      color={color}
      text={text}
    />
  )
}

export default TitleComponent