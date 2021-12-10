import Footer from './Footer';
import Navbar from './Navbar';
// import ProjectList from './ProjectList';

export default function PageLayout({children}) {
  return (
    <div className ="container">
      <Navbar />
        <div className="h-screen flex grid grid-cols-6 gap-4">
          {children}
      </div>
      <Footer />
    </div>
  )
}