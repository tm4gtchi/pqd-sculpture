import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout'
import Gallery from 'components/Gallery';
import { getProjectBySlug, getAllProjects } from 'lib/api';

const ProjectPage = ({ projects }) => {

  const [galleryURLs, setGalleryURLs] = useState([]);

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
        <div className="object-center container grid grid-rows-2 gap-4 w-screen h-screen m-4 place-content-center">
        <section className="row-span-1 w-full flex flex-col mt-12 place-content-evenly md:flex-row">
            <div className="text-container bg-white w-3/6">
              <div className="text-div w-9/12 ">
                <span>{projects.title}</span>
                <p>{projects.subtitle}</p>
                <p className="text-xs">{projects.description}</p>
              </div>
            </div>
          <img className="main_image object-contain" src={projects.mainImg} alt="mainimg" />
        </section>
        <section className="row-span-1 w-full flex flex-col place-content-evenly md:flex-row">
            <div className="text-container bg-white w-3/6">
              <div className="text-div w-9/12">
                <span>detail text</span>
                <p>lorem ipsem</p>
                <p className="text-xs">{projects.description}</p>
              </div>
            </div>
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

export async function getStaticPaths() {
  const projects = await getAllProjects();
  const paths = projects?.map(project => ({params: {slug: project.slug}}));
  return {
    paths,
    fallback: true
  }
}

export default ProjectPage;

