import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
  title: string
  handlePress: () => void
  textStyles?: string
  containerStyles?: string
  isLoading?: boolean
}

const CustomButtom = ({ 
  title,
  handlePress,
  textStyles,
  containerStyles,
  isLoading
 }: Props ) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-secondary-200 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButtom