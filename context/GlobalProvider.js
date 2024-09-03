import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function getAccessToken() {
        console.log('Fetching user');

        try {
            let result = await SecureStore.getItemAsync('accessToken');
            if (result) {
                console.log('result: ', result);
                setIsLogged(true);
            } else {
              console.log("No values stored under that accessToken.");
            }
        } catch (error) {
            console.error("Failed to fetch current user:", error);
            setIsLogged(false);
            setUser(null);
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
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
