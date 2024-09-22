import { View, Text, FlatList, Image, RefreshControl, Alert, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';
import VideoCard from '@/components/VideoCard';
import { getAllPosts, getLatestPosts, LOCAL_IP_ADDRESS } from '../utils';
import usePosts from '../utils/hooks/usePosts';

const Home = () => {
    const { posts, latestPosts, isLoading, refreshing, onRefresh } = usePosts();
    console.log('latestPosts: ', latestPosts);


  return (
    <SafeAreaView className='bg-primary h-full'>
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <VideoCard video={item}/>
            )}
            ListHeaderComponent={() => (
                <View className='my-6 px-4 spase-y-6'>
                    <View className='justify-between items-start flex-row mb-6'>
                        <View>
                            <Text className='font-pmedium text-sm text-gray-100'>
                                ПРИВЕЕЕТ!!!
                            </Text>
                            <Text className='text-2xl text-white'>
                                Ваша личная страница
                            </Text>
                        </View>

                        <View className='mt-2'>
                            <Image 
                                source={images.logoSmall}
                                className='w-9 h-10'
                                resizeMode='contain'
                            />
                        </View>
                    </View>

                    <SearchInput
                        title='search'
                        value='123'
                        handleChange={() => {}}
                        otherStyles=''
                    />

                    <View className='w-full flex-1 pt-5 pb-8'>
                        <Text className='text-gray-100 text-lg font-pregular mb-3'>
                            Последние видосики
                        </Text>

                        <Trending posts={latestPosts ?? []} />

                    </View>
                </View>
            )}
            ListEmptyComponent={() => (
            <EmptyState
                title='Видосов нету'
                subtitle='Будьте первым кто загрузит видео'
            />
            )}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        />
    </SafeAreaView>
  );
};

export default Home;
