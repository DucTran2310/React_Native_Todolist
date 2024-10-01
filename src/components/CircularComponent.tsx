import { View, Text } from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';

interface CircularComponentProps {
  color?: string;
  value: number;
  maxValue?: number
}

const CircularComponent = (props: CircularComponentProps) => {

  const {
    color,
    value,
    maxValue
  } = props

  return (
    <CircularProgress
      value={value}
      title={`${value}%`}
      showProgressValue={false}
      activeStrokeColor={color ?? colors.blue}
      inActiveStrokeColor={color ?? colors.gray2}
      titleColor={colors.text}
      titleFontSize={32}
      titleStyle={{
        fontFamily: fontFamilies.semiBold
      }}
    />
  )
}

export default CircularComponent