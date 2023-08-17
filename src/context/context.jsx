import { createContext, useEffect, useReducer } from "react";
import React from "react";
import { reducer } from "./reducer"
export const GlobalContext = createContext("Intial Value");

const getUserInfo = () => {
    try {
      const localStorageUser = localStorage.getItem('user');
      if (localStorageUser) {
        return JSON.parse(localStorageUser);
      }
    } catch (error) {
      console.error('Error retrieving user data from local storage:', error);
    }

    return initialform_state;
  };

  export default function ContextProvider({ children }) {
    const data = getUserInfo();
  
    const [state, dispatch] = useReducer(reducer, data);
  
    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(state));
    }, [state]);
  
    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    );
  }
