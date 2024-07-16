import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import FormField from '@/components/FormField'
import CustomButtom from '@/components/CustomButtom'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {

  }

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

          <CustomButtom
            containerStyles='mt-7'
            title='Sign in'
            handlePress={handleSubmit}
            isLoading={isLoading}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have an account?
            </Text>
            <Link href='/sign-up' className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
