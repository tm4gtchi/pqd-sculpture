import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout'
import Gallery from 'components/Gallery';

import { getProjectBySlug, getAllProjects } from 'lib/api';
import Navbar from 'components/Navbar';

const ProjectPage = ({ projects }) => {

  // ARTWORK DATA
  const [galleryURLs, setGalleryURLs] = useState([]);
  const [artworkText, setArtworkText] = useState([]);

  useEffect(() => {
    async function handleGallery(){
      let urls = [];
      projects.gallery.forEach((item) => {
        urls.push(item.url)
        return urls
      }) 
        setGalleryURLs(urls)
    } handleGallery();
  }, [])

  return(
      <PageLayout projects={projects}>
        {/* LEFT SIDE */}
        <div className="container grid grid-rows-3 gap-4 w-screen h-screen m-4 fixed">
        <section className="row-span-2 flex flex-row mt-12">
            <div className="bg-white mr-16">
              <span>{projects.title}</span>
              <p>{projects.subtitle}</p>
              <p className="text-xs">{projects.description}</p>
            </div>
          <img className="main_image max-w-8/12 h-auto" src={projects.mainImg} alt="mainimg" />
        </section>
        <section className="row-span-1 flex flex-no-wrap overflow-x-scroll 
          scrolling-touch h-auto place-self-end">
          <Gallery series={projects} urls={galleryURLs}/>
        </section>
        </div>
      </PageLayout>
  )
}

export async function getStaticProps({params, preview = false, previewData}) {
  const projects = await getProjectBySlug(params.slug, preview);
  return {
    props: { projects, preview },
    revalidate: 1
  }
}

// TODO: Introduce fallback
export async function getStaticPaths() {
  const projects = await getAllProjects();
  const paths = projects?.map(project => ({params: {slug: project.slug}}));
  return {
    paths,
    fallback: true
  }
}

export default ProjectPage;