import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({children}) {
  return (
    <div className ="container">
      <Navbar />
        <div className="h-screen flex grid grid-cols-4 gap-4">
          {children}
      <Footer />
        </div>
    </div>
  )
}