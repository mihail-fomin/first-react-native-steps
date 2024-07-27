import { View, Text, FlatList } from 'react-native'
import React from 'react'

interface Props {
  posts: Array<{ id: string }>
}

const Trending = ({ posts }: Props) => {
  return (
    <FlatList 
      data={posts}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <Text className='text-3xl text-white'>{item.id}</Text>
      )}
    />
  )
}

export default Trending