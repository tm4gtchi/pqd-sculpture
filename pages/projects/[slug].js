import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout'
import Gallery from 'components/Gallery';

import { getProjectBySlug, getAllProjects } from 'lib/api';

// const SLIDE_COUNT = 10;
// const slides = Array.from(Array(SLIDE_COUNT).keys());

const ProjectPage = ({ projects }) => {

  return(
      <PageLayout projects={projects}>
        <section className="col-span-2 sticky">
          <div className="flex flex-col mt-11 h-screen" key={projects.slug}>
            <div className="w-1/3 m-4 fixed">
              <div className="mt-11 mr-16">
                <span>{projects.title}</span>
                <p>{projects.subtitle}</p>
                <p className="text-xs">{projects.description}</p>
              </div>
              
              <div className="bottom-1 mt-11 mr-16">
                <span>{projects.title}</span>
                <p>{projects.subtitle}</p>
                <p className="text-xs">{projects.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="col-span-4">
          {/* <div className="w-100"> */}
            <Gallery projects={projects} />
          {/* </div> */}
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