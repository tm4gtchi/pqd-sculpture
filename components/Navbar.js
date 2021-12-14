import Link from 'next/link'

const Navbar = ({author}) => {
  return (
    <nav className="nav fixed top-0 flex flex-wrap items-center w-full justify-between px-4">
      <p className="font-semibold">Pablo Quiroga Devia</p>   

      <ul className="menu md:border-none flex justify-end">
        
        <li className="md:border-none">
          <Link href="/cv" className="block md:inline-block px-4 py-3 no-underline">cv</Link>
        </li>
        
        <li className="md:border-none">
          <Link 
          href="/pqd-sculpture/pages/profile/[slug].js" 
          // as={`/${encodeURIComponent(author.slug)}`}
          className="block md:inline-block px-4 py-3 no-underline">contact</Link>
        </li>
        
        </ul>
    </nav>
  )
}

export default Navbar

