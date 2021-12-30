import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="nav fixed top-0 flex flex-wrap items-center w-full justify-between px-4 mobile:mt-4">
      <Link href="/">
        <a className="font-semibold">Pablo Quiroga Devia</a>   
      </Link>
    </nav>
  )
}

export default Navbar

