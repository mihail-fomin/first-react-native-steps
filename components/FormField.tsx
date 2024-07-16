import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '@/constants'

interface Props {
  title: string
  value: string
  placeholder?: string
  handleChange: (event: any) => void
  otherStyles: string
  keyboardType?: string
}

const FormField = ({ 
  title,
  value,
  placeholder,
  handleChange,
  otherStyles,
  keyboardType,
 }: Props) => {

  const [shoWPassord, setShoWPassord] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>
        {title}
      </Text>
      <View className='w-full h-16 px-4 bg-black-100 rounded-2xl border-black-200 focus:border-secondary border-2 items-center flex-row'>
        <TextInput
          className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChange}
          secureTextEntry={title === 'Password' && !shoWPassord}
        />
        {title === 'Password' && (
          <TouchableOpacity
            className='flex-shrink-0 ml-2'
            onPress={() => setShoWPassord(!shoWPassord)}
          >
            <Image
              source={!shoWPassord ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
              resizeMode='contain'
            ></Image>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField