import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { getAllPosts, getLatestPosts } from "@/app/utils";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function getAccessToken() {
        setIsLoading(true)
        console.log('Fetching user');

        try {
            let token = await SecureStore.getItemAsync('accessToken');
            if (!token) {
                console.log("No values stored under that accessToken.");
                return
            } else {
                const posts = await getLatestPosts()

                if (posts.statusCode === 401) {
                    await SecureStore.deleteItemAsync('accessToken')
                    setIsLogged(false);
                } else if (posts.length > 0) {
                    setIsLogged(true);
                }
            }
        } catch (error) {
            console.error("Failed to fetch current user:", error);
            setIsLogged(false);
            setUser(null);
        } finally {
            setIsLoading(false)
        }
      }

      getAccessToken();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
