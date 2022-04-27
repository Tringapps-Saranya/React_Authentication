import { useNavigate,Outlet} from 'react-router-dom'
import { useState } from 'react';
import {useAuth} from './Auth';
import { Navigate } from 'react-router-dom'

export const Login = () => {
    const [user,setUser] = useState('')
    const auth = useAuth();

    const navigate = useNavigate();

    const handleLogin = ()=>{
        auth.login(user)
        navigate('/profilepage')

        if(!auth.user){
            return <Navigate to= '/'></Navigate>
        }    
    }
    
  return (
      <div class="login">
           <input id="inputbox" type='text' placeholder='username' onChange={(e =>setUser(e.target.value))}></input>  <br /><br /><br />
           <button class="button1"  onClick ={handleLogin}>Login</button> 
        <Outlet />    
    </div>
  )
}

