import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex flex-col right-0 p-4 fixed"> 
      <div className="flex flex-col space-y-4">
        <Link 
          href="/pqd/cv" >
            <a>cv</a>
          </Link>
          <Link
            href="/es">
            <a>es</a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer

