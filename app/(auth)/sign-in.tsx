import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import FormField from '@/components/FormField'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[155px] h-[35px]'
          />

          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
            Вход в систему
          </Text>

          <FormField 
            title='Email'
            value={form.email}
            placeholder='Email Address'
            handleChange={(e) => setForm({...form, email: e})}
            otherStyles='mt-7'
            keyboardType='email'
          />

          <FormField 
            title='Password'
            value={form.password}
            placeholder='password'
            handleChange={(e) => setForm({...form, password: e})}
            otherStyles='mt-7'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
