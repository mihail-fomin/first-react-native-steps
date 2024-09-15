import { View, Text, FlatList, Image, RefreshControl, Alert, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';
// import { db } from '../../lib/firebaseConfig';
import CustomButtom from '@/components/CustomButtom';
// import { addPost, getPosts, updatePost, deletePost, getUsers } from '@/lib/firestoreService';
import FormField from '@/components/FormField';
import VideoCard from '@/components/VideoCard';
import { LOCAL_IP_ADDRESS } from '../utils';

const Home = () => {
  const [posts, setPosts] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [newPost, setNewPost] = useState('');

  const fetchPosts = async () => {
    try {
      const fetchedPosts = await fetch(`http://${LOCAL_IP_ADDRESS}/articles/`);
      const json = await fetchedPosts.json();
      setPosts(json);
    } catch (error) {
      console.error('Ошибка при получении данных: ', error);
    }
  };
  

  useEffect(() => {
    const initializePosts = async () => {
        setRefreshing(true); // Обновление данных при рендере
        await fetchPosts();
        setRefreshing(false); // Остановка индикации обновления
      };
      initializePosts();
  }, []);

  
  const onRefresh = async () => {
    setRefreshing(true)
    await fetchPosts()
    setRefreshing(false)
  }

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

                {/* <Trending 
                    posts={posts}
                /> */}

            </View>
            {/* <View>
                <Text className='text-white'>Posts</Text>
                <FormField
                    title='New post'
                    placeholder="New post"
                    value={newPost}
                    handleChange={(e) => setNewPost(e)}
                />
                <CustomButtom
                    title="Add Post"
                    isLoading={isLoading}
                    handlePress={handleAddPost}
                />
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <Text className='text-white'>{item.content}</Text>
                            <Button title="Update" onPress={() => handleUpdatePost(item.id, 'Updated Content')} />
                            <Button title="Delete" onPress={() => handleDeletePost(item.id)} />
                        </View>
                    )}
                /> 
            </View> */}
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='Видосов нету'
            subtitle='Будьте первым кто загрузит видео'
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
