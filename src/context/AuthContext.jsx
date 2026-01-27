'use client';

import { useContext , createContext, useState  } from "react";

const AuthContext = createContext();
export const AuthProvider = ({children}) =>{
   const [islogin , setIslogin] = useState(false)
   return(
      <AuthContext.Provider value={{islogin , setIslogin}}>
         {children}
      </AuthContext.Provider>
   )
}


export const useAuth = () => {
   return useContext(AuthContext)
}