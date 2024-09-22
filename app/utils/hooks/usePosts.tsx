import { useState, useEffect } from 'react';
import { getAllPosts, getLatestPosts } from '../';

export interface Post {
    id: string;
    title: string;
    description: string | null;
    videoUrl: string;
    thumbnailUrl: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: string;
    author: Author;
}

export interface Author {
    id: string;
    name: string;
    avatarUrl: string;
    email: string;
}

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch all posts on mount
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  // Fetch latest posts
  useEffect(() => {
    const fetchLatestPosts = async () => {
      const fetchedLatestPosts = await getLatestPosts();
      setLatestPosts(fetchedLatestPosts);
    };
    fetchLatestPosts();
  }, []);

  // Handle refreshing of posts
  const onRefresh = async () => {
    setRefreshing(true);
    const refreshedPosts = await getAllPosts();
    setPosts(refreshedPosts);
    setRefreshing(false);
  };

  return { posts, latestPosts, isLoading, refreshing, onRefresh };
};

export default usePosts;
