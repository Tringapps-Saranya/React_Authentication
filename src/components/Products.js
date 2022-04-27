import React from 'react'
import { Link,Outlet} from 'react-router-dom'

export const Products = () => {
  return (
    <div>
      <input type='search' placeholder='search products'></input>
      <nav>
        <Link id="linkkurti" to='kurtis'>Kurtis</Link>
        <Link id="linkwatch" to='watches'>Watches</Link>
      </nav>
      <Outlet />
    </div>
  )
}
