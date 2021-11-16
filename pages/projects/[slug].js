import PageLayout from '../../components/PageLayout'

import {getProjectBySlug, getAllProjects} from 'lib/api';

const ProjectPage = ({projects}) => {

  return(
      <PageLayout projects={projects}>
        
        <section className="flex-1 flex overflow-hidden justify-items-center col-span-2">
          <div className="flex-1 overflow-y-scroll place-content-evenly m-4" key={projects.slug}>
            <div className="mt-11">
              <span>{projects.title}</span>
              <p>{projects.subtitle}</p>
            <p className="w-100">{projects.description}</p>
            </div>
            
            <div className="mt-11">
              <span>{projects.title}</span>
              <p>{projects.subtitle}</p>
              <p className="w-100">{projects.description}</p>
            </div>
          </div>
        </section>

        <section className="col-span-4 mb-1">
          <img className="w-full mb-6" src={projects.mainImg} alt="image"/>
              {/* <div className="flex-row"> */}
          <div className="flex flex-row h-60 overflow-hidden">
          {projects.gallery.map((g, index) => (
            <img className="gallery_images mr-4 "src={g.url} alt="image"/>
          ))}
          </div>
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

        // <div class="grid grid-rows-1 grid-flow-col gap-2">
        // <section className="row-span-3">
        //   <div className="mt-12 m-4 mr-6" key={projects.slug}>
        //     <p>{projects.title}</p>
        //     <p>{projects.subtitle}</p>
        //     <p className="w-100">{projects.description}</p>
        //   </div>
        // </section>
        // <section className="col-span-2">
        //       <img className="w-full mb-6" src={projects.mainImg} alt="image"/>
        // </section>
        // <section className="row-span-2 col-span-2 flex flex-row h-60 gap-4 overflow-hidden">
        //   {/* <div className="flex-row"> */}
        //   {projects.gallery.map((g, index) => (
        //     <img className="gallery_images "src={g.url} alt="image"/>
        //   ))}
        //   {/* </div> */}
        // </section>
        // </div>