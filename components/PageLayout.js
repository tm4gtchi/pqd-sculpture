import Footer from './Footer';
import Navbar from './Navbar';

import {getAuthorInfo} from '../lib/api';

export default function PageLayout({children, author}) {
  return (
    <div className ="container">
      <Navbar data={author}/>
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
