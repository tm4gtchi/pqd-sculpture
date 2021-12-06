import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout'
import Gallery from 'components/Gallery';
import Carousel from 'components/Gallery_Test';

import { getProjectBySlug, getAllProjects } from 'lib/api';

const ProjectPage = ({ projects }) => {

  const [thumbnailImg, setThumbnailImg] = useState([]);

  useEffect(() => {
    async function handleThumbnails(){
      if (!projects.gallery.length) return;
      let items =  projects.gallery.map((artwork, index) => 
        <div className="item" data-value={index}>
          <img className="thumbnail_img" src={artwork.url} alt="thmb" />
        </div>)
        setThumbnailImg(items)
    } handleThumbnails();
  }, [])

  return(
      <PageLayout projects={projects}>
        <section className="col-span-2 sticky">
          <div className="flex flex-col mt-11 h-screen" key={projects.slug}>
            <div className="w-1/3 m-4 fixed">
              <div className="mt-11 mr-16">
                <span>{projects.title}</span>
                <p>{projects.subtitle}</p>
                <p className="text-xs">{projects.description}</p>
              <Carousel />
              </div>

              
              <div className="bottom-1 mt-11 mr-16">
                <span>{projects.title}</span>
                <p>{projects.subtitle}</p>
                <p className="text-xs">{projects.description}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
            <Gallery thumbnailImg={thumbnailImg}/>
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