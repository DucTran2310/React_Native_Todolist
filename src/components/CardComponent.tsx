import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';

interface CardProps {
  children: ReactNode;
  bgColor?: string;
  styles?: StyleProp<ViewStyle>
}

const CardComponent = (props: CardProps) => {

  const {
    children,
    bgColor,
    styles
  } = props

  return (
    <View style={[globalStyles.inputContainer, {padding: 12}, styles]}>
      {children}
    </View>
  )
}

export default CardComponent 