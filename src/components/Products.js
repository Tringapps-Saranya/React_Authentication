export const Products = () => {
  return (
    <div class="productdiv">
      <div class="input">
      <input type='search' placeholder='search products'></input><br></br>
      </div>
      <nav class="productnav">
        <Link id="linkkurti" to='kurtis'>Kurtis</Link>
        <Link id="linkwatch" to='watches'>Watches</Link>
      </nav>
      <Outlet />
    </div>
  )
}
