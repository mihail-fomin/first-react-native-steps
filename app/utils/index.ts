export const LOCAL_IP_ADDRESS = '192.168.0.12:3000'
const ARTICLES_URL = `http://${LOCAL_IP_ADDRESS}/articles`
import * as SecureStore from 'expo-secure-store';

export const getAllPosts = async () => {
  try {
    const token = await SecureStore.getItemAsync('accessToken');

    const result = await fetch(`${ARTICLES_URL}`, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }

    });
    return await result.json();
  } catch (error) {
    console.error('Ошибка при получении данных: ', error);
  }
};

export const getLatestPosts = async () => {
    try {
        const token = await SecureStore.getItemAsync('accessToken');

        const response = await fetch(`${ARTICLES_URL}/latest`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        });

        if (response.ok) {
            const result = await response.json();
            return result
        }
    } catch (error) {
      console.error('Ошибка при получении данных: ', error);
    }
}
  
  