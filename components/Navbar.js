const Navbar = () => {
  return (
    <nav className="nav fixed top-0 flex flex-wrap items-center w-full justify-between px-4">
      <p className="font-semibold">Pablo Quiroga Devia</p>   

      <ul className="menu md:border-none flex justify-end">
        
        <li className="md:border-none">
          <a href="/cv" className="block md:inline-block px-4 py-3 no-underline">cv</a>
        </li>
        
        <li className="md:border-none">
          <a href="/about/" className="block md:inline-block px-4 py-3 no-underline">contact</a>
        </li>
        
        </ul>
    </nav>
  )
}

export default Navbar

