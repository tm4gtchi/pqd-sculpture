const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex flex-wrap items-center w-full justify-end px-4"> 
      <ul className="md:border-none flex">  
        <li className="md:border-none">
          <a href="/pt" className="block md:inline-block px-4 py-3 no-underline">pt</a>
        </li>  
        <li className="md:border-none">
          <a href="/es" className="block md:inline-block px-4 py-3 no-underline">es</a>
        </li>  
      </ul>
    </footer>
  )
}

export default Footer

