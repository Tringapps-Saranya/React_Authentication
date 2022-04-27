import { useState  ,useContext,createContext} from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{
    const[user,setUser] = useState(null)

    const login = (newuser) =>{
        setUser(newuser)
    }

    const logout = () =>{
        setUser()
    }
    return(
        <AuthContext.Provider value= {{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
   export const useAuth = () =>{
       return useContext(AuthContext)
   }
