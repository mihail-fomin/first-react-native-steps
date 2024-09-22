import { Text, FlatList, TouchableOpacity, ImageBackground, Image, ViewToken } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { Post } from '@/app/utils/hooks/usePosts'
import { icons } from '@/constants'

interface Props {
  posts: Post[]
}

const zoomIn = {
    0: { transform: [{ scale: 0.9 }] },
    1: { transform: [{ scale: 1 }] },
  };
  
  const zoomOut = {
    0: { transform: [{ scale: 1 }] },
    1: { transform: [{ scale: 0.9 }] },
  };


const TrendingItem = ({ activeItem, item }: { activeItem: Post, item: Post}) => {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <Animatable.View
            className="mr-5"
            animation={activeItem.id === item.id ? zoomIn : zoomOut}
            duration={500}
        >
            {isPlaying ? (
                <Text className='text-white'>Playing</Text>
            ): (
                <TouchableOpacity
                    className='relative justify-center items-center'
                    activeOpacity={0.7}
                    onPress={() => setIsPlaying(true)}
                >
                    <ImageBackground 
                        source={{ uri: item.thumbnailUrl }}
                        className='w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40'
                        resizeMode='cover'
                    />

                    <Image
                        source={icons.play}
                        className='w-12 h-12 absolute'
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            )}
        </Animatable.View>
    )
}

const Trending = ({ posts }: Props) => {
    const [activeItem, setActiveItem] = useState(posts[0])

    const viewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
        console.log('viewableItems: ', viewableItems);
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].item);
        }
    };

    return (
        <FlatList 
            data={posts}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TrendingItem activeItem={activeItem} item={item}/>
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 70,
            }}
            contentOffset={{ x: 170, y: 0 }}
        />
  )
}

export default Trending