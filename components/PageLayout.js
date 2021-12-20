import Footer from './Footer';
import Navbar from './Navbar';

export default function PageLayout({children}) {
  return (
    <div className ="container">
      <Navbar />
        <div className="h-screen flex grid grid-cols-4 gap-4">
          {children}
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const author = await getAuthorInfo();
  return {
    props: {
      author,
    }
  }
}
