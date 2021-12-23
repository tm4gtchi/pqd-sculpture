import Navbar from './Navbar';

export default function PageLayout({children}) {
  return (
    <div className ="container">
      <Navbar />
        <div className="h-screen flex grid grid-cols-4 gap-4">
          {children}
      </div>
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
