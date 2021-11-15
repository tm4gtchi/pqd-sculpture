import PageLayout from '../../components/PageLayout'

import {getProjectBySlug, getAllProjects} from 'lib/api';

const ProjectPage = ({projects}) => {

  return(
        <PageLayout projects={projects}>
        <section className="col-span-2">
          <div className="mt-12 ml-2" key={projects.slug}>
            <p>{projects.title}</p>
            <p>{projects.subtitle}</p>
            <p className="w-100">{projects.description}</p>
          </div>
        </section>
        <section className="col-span-4">
          {projects.gallery.map((g, index) => (
            <img className="w-full h-100" src={g.url} alt="image"/>
          ))}
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