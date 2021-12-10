import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout'
import Gallery from 'components/Gallery';

import { getProjectBySlug, getAllProjects } from 'lib/api';

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
        <section className="col-span-2 sticky">
          <div className="flex flex-col mt-11 h-screen" key={projects.slug}> 
            <div className="w-1/3 m-4 fixed">
              <div className="bg-white absolute mt-11 mr-16">
                <span>{projects.title}</span>
                <p>{projects.subtitle}</p>
                <p className="text-xs">{projects.description}</p>
              </div>
              <div className="bottom-1 mt-11 mr-16"> 
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
            <Gallery series={projects} urls={galleryURLs}/>
        </section>
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