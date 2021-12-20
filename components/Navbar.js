import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="nav fixed top-0 flex flex-wrap items-center w-full justify-between px-4">
      <Link href="/">
        <a className="font-semibold">Pablo Quiroga Devia</a>   
      </Link>

      <ul className="menu md:border-none flex flex-col justify-end">
        
        <li className="md:border-none">
          <Link 
            href="/pqd/cv" 
            className="block md:inline-block px-4 py-3 no-underline">
              <a>cv</a>
            </Link>
        </li>
        
        <li className="md:border-none">
          <Link 
          href="/pqd/bio" 
          // as={`/${encodeURIComponent(author.slug)}`}
          className="block md:inline-block px-4 py-3 no-underline">
            <a>contact</a>
            </Link>
        </li>
        
        </ul>
    </nav>
  )
}

export default Navbar

