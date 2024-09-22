export const LOCAL_IP_ADDRESS = '192.168.0.12:3000'
const ARTICLES_URL = `http://${LOCAL_IP_ADDRESS}/articles`

export const getAllPosts = async () => {
  try {
    const result = await fetch(`${ARTICLES_URL}`);
    return await result.json();
  } catch (error) {
    console.error('Ошибка при получении данных: ', error);
  }
};

export const getLatestPosts = async () => {
    try {
      const result = await fetch(`${ARTICLES_URL}/latest`);
      return await result.json();
    } catch (error) {
      console.error('Ошибка при получении данных: ', error);
    }
}
  
  