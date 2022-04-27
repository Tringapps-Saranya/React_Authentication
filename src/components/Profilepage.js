import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export const Profilepage = () => {
    const auth= useAuth()
    const navigate = useNavigate();

    const handleLogout = () =>{
        auth.logout()
        navigate('/')
    }

  return (auth.user &&
    <div class="profile">
        
        Welcome {auth.user}!
        <div>
        <button class="button2" onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}
