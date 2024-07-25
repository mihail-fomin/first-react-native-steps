import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButtom from '@/components/CustomButtom'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'
import 'react-native-url-polyfill/auto'
import { useGlobalContext } from '@/context/GlobalProvider'


const RootLayout = () => {
  const { isLoading, isLoggedIn } = useGlobalContext()

    if (!isLoading && isLoggedIn) return <Redirect href='/home'/>

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center h-full px-4'>

          <Image
            source={images.logo}
            className='w-[130px] h-84px'
            resizeMode='contain'
          />

          <Image 
            source={images.mary}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />

          <Text className='text-3xl text-white font-bold text-center'>
            Discover Possibilities with&nbsp;
            <Text className='text-secondary-200'>MASHA</Text>
          </Text>

          <Image
            className='w-[100px] h-4 ml-20' 
            source={images.path}
            resizeMode='contain'
          />

          <Text className='text-2xl text-white font-bold text-center'>
            Давай Давай!!!
          </Text>

          <CustomButtom
            title='Войти через Email'
            handlePress={() => router.push('/sign-in')}
            containerStyles='w-full mt-7'
            isLoading={false}
          />
        </View>
      </ScrollView>

      <StatusBar
        backgroundColor='#161622'
        style='light'
      />
    </SafeAreaView>
  )
}

export default RootLayout
