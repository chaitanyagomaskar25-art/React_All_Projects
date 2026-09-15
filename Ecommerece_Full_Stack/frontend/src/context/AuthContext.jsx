import { createContext, useContext, useState } from "react";

const AuthContext = createContext()
const AuthDispatch = createContext()
const AdminAuth = createContext()
export const AuthContextProvider = ({ children })=>{
    const [loggedIn, setLoggedIn] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <AuthContext.Provider value={loggedIn}>
            <AuthDispatch.Provider value={setLoggedIn}>
              <AdminAuth value={{isAdmin, setIsAdmin}}>
                {children}

              </AdminAuth>
            </AuthDispatch.Provider>
        </AuthContext.Provider>
    )
}

export const useAuthContext = ()=>{
    const result = useContext(AuthContext)
    if(result === undefined){
    throw new Error("useAuthContext must be used inside AuthContextProvider");
    }
    return result
}

export const useAuthDispatch = ()=>{
    const result = useContext(AuthDispatch)
    if(result === undefined){
    throw new Error("useAuthDispatch must be used inside AuthContextProvider");
    }
    return result
}

export const useAdminAuth = ()=>{
    const result = useContext(AdminAuth)
    if(result === undefined){
    throw new Error("useAuthDispatch must be used inside AuthContextProvider");
    }
    return result
}
