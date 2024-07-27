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

const SearchInput = ({ 
  title,
  value,
  placeholder,
  handleChange,
  otherStyles,
  keyboardType,
 }: Props) => {

  const [shoWPassord, setShoWPassord] = useState(false)

  return (
      <View className='w-full h-16 px-4 bg-black-100 rounded-2xl border-black-200 focus:border-secondary border-2 items-center flex-row space-x-4'>
        <TextInput
          className='text-base mt-1 text-white flex-1 font-pregular'
          value={value}
          placeholder='Поиско по теме видео'          
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChange}
          secureTextEntry={title === 'Password' && !shoWPassord}
        />

        <TouchableOpacity>
          <Image
            source={icons.search}
            className='w-5 h-5'
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput