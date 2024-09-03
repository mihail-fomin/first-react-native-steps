import { StyleSheet, ScrollView, View, Image, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import FormField from '@/components/FormField'
import CustomButtom from '@/components/CustomButtom'
import { Link, router } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvider'


const SignUp = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните необходимые поля')

      return
    }

    setIsLoading(true)

    try {
        const result = await fetch('http://192.168.0.12:3000/users/', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              // "Authorization": "Bearer "
            },
            body: JSON.stringify({
                email: form.email,
                name: form.username,
                password: form.password
            })
        });

        if (result.ok) {
            const data = await result.json();
            console.log('Response Data:', data);
            Alert.alert('Success!');
            router.replace('/home')
        } else {
            Alert.alert('Sign up failed', `Request failed with status: ${result.status}`);
        }

    } catch (error: any) {
      Alert.alert('Ошибка', error.message)
    } finally {
      setIsLoading(false)
    }
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
            handleChange={(e) => setForm({...form, username: e})}
            otherStyles='mt-10'
          />

          <FormField 
            title='Email'
            value={form.email}
            handleChange={(e) => setForm({...form, email: e})}
            otherStyles='mt-7'
            keyboardType='email'
          />

          <FormField 
            title='Password'
            value={form.password}
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
