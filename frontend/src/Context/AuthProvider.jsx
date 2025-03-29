import React, { createContext, useState } from "react";
import { getLocolStorage } from "../Utils/LocalStorage";
import { useEffect } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    
    const [UserData, SetUserData] = useState(null)
    useEffect(() => {
        const {admin,users}=getLocolStorage()
      SetUserData({admin,users})
    }, [])
    
    
    
  return (
    <div>
      <AuthContext.Provider value={UserData}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
