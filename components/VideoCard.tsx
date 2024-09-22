import { icons } from '@/constants'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import WebView from 'react-native-webview'

type Props = {
    video:
    {
        title: string, thumbnailUrl: string, videoUrl: string,
        author: {
            name: string,
            avatarUrl: string,
        }
    }
}

const VideoCard = (props: Props) => {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
    <View className='flex-col items-center px-4 mb-14'>
        <View className='flex-row gap-3 items-start '>
            <View className='justify-center items-center flex-row flex-1'>
                <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
                    <Image 
                        className='w-full h-full rounded-lg'
                        resizeMode='cover'
                        source={{ uri: props.video.author.avatarUrl }}
                    />
                </View>
                <View className='justify-center flex-1 ml-3 gap-y-1'>
                    <Text
                        className='text-white font-psemibold text-sm'
                        numberOfLines={1}
                    >
                        {props.video.title}

                    </Text>
                    <Text 
                        className='text-xs text-gray-100 font-pregular'
                        numberOfLines={1}
                    >
                        {props.video.author.name || 'username'}
                    </Text>
                </View>
            </View>

            <View className='pt-2 '>
                <Image
                    source={icons.menu} 
                    className='w-5 h-5'
                    resizeMode='contain'
                />
            </View>
        </View>

        {isPlaying ? (
            <WebView
            className='w-52 h-72 rounded-[35px] mt-3 bg-white/10'
            source={{ uri: props.video.videoUrl }}
        />
        ) : (
            <TouchableOpacity
                activeOpacity={0.7}
                className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'
                onPress={() => setIsPlaying(true)}
            >
                <Image
                    source={{ uri: props.video.thumbnailUrl }}
                    className='w-full h-full rounded-xl mt-3'
                    resizeMode='cover'
                />
                <Image 
                    source={icons.play}
                    className='w-12 h-12 absolute'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        )}
    </View>
  )
}

export default VideoCard