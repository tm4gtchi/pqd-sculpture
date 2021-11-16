import Footer from './Footer';
import Navbar from './Navbar';
// import ProjectList from './ProjectList';

export default function PageLayout({children}) {
  return (
    <div className ="container">
      <Navbar />
        <div className="h-screen flex grid grid-cols-6 gap-4">
      {/* <div className="grid grid-cols-7 gap-4"> */}
        {/* <div className="flex-1 flex bg-gray-100 overflow-hidden"> */}
          {children}
        {/* </div> */}
      {/* </div> */}
      </div>
      <Footer />
    </div>
  )
}