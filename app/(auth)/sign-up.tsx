import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import FormField from '@/components/FormField'
import CustomButtom from '@/components/CustomButtom'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {

  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full min-h-[85vh] px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[155px] h-[35px]'
          />

          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
            Регистрация
          </Text>

          <FormField 
            title='Username'
            value={form.username}
            placeholder='Username'
            handleChange={(e) => setForm({...form, username: e})}
            otherStyles='mt-10'
          />

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
            title='Sign Up'
            handlePress={handleSubmit}
            isLoading={isLoading}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Уже есть аккаунт?
            </Text>
            <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
