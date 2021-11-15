import Footer from './Footer';
import Navbar from './Navbar';
// import ProjectList from './ProjectList';

export default function PageLayout({children}) {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-7 gap-4">
        {/* <div className="flex-1 flex bg-gray-100 overflow-hidden"> */}
          {children}
        {/* </div> */}
      </div>
      <Footer />
    </>
  )
}