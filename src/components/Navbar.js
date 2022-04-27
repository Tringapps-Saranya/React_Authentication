import React from 'react'
import {NavLink} from 'react-router-dom';
import { useAuth } from './Auth';

export const Navbar = () => {
  const auth = useAuth()
  return (
    <div>
        <nav class='nav-primary'>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='about'>About</NavLink>
       <NavLink to='products'>Products</NavLink>
       <NavLink to='profilepage'>ProfilePage</NavLink>
       {!auth.user && (
         <NavLink to='/login'>Login</NavLink>
       )

       }
       </nav>
    </div>
  )
}
