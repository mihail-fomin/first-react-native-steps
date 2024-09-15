import { View, Text, FlatList } from 'react-native'
import React from 'react'

interface Props {
  posts: Array<any>
}

const Trending = ({ posts }: Props) => {

    return (
    <FlatList 
      data={posts}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <Text className='text-3xl text-white'>{item.title}</Text>
      )}
    />
  )
}

export default Trending