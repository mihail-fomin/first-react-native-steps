import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'

import { icons } from '@/constants'
import { router, usePathname } from 'expo-router'

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

  const pathName = usePathname()
  const [shoWPassord, setShoWPassord] = useState(false)
  const [query, setQuery] = useState('')

  return (
      <View className='w-full h-16 px-4 bg-black-100 rounded-2xl border-black-200 focus:border-secondary border-2 items-center flex-row space-x-4'>
        <TextInput
          className='text-base mt-1 text-white flex-1 font-pregular'
          value={query}
          placeholder='Поиско по теме видео'
          placeholderTextColor='#CDCDE0'
          onChangeText={(e) => setQuery(e)}
        />

        <TouchableOpacity
            onPress={() => {
                if (!query) {
                    return Alert.alert(
                        'Запрос отсутствует',
                        'Пожалуйста, введите запрос для поиска.',
                    )

                }
                if (pathName.startsWith('/search')) {
                    router.setParams({ query })
                }
                else {
                    router.push(`/search/${query}`)
                }
            }}
        
        >
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