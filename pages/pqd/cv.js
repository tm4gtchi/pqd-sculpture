import PageLayout from '../../components/PageLayout'
import { getBiography } from 'lib/api';

const Resume = ({biography}) => {

  return(
      <PageLayout>
        {/* LEFT SIDE */}
        <div className="object-center container grid grid-rows-2 gap-4 w-screen h-screen m-4 place-content-center">
        <section className="row-span-1 w-full flex flex-col mt-12 place-content-evenly md:flex-row">
            <div className="text-container bg-white">
              <div className="text-div mt-4">
                <span className="text-xs">
                {biography[0].biography_text}  
                </span>
              </div>
            </div>
        </section>
        <section className="row-span-1 w-full flex flex-col md:flex-row">
            <div className="text-container bg-white">
              <div className="text-div">
                <h1>Curriculum Vitae</h1>
                <ul>
                  <li>Exposições</li>
                  <li>Residências</li>
                  <li>Publicações</li>
                  <li>Projetos como integrante de coletivo</li>
                  <li>Workshop e outras formações</li>
                  <li>Estudos</li>
                </ul>
              </div>
            </div>
        </section>
        </div>
      </PageLayout>
  )
}

export async function getStaticProps() {
  const biography = await getBiography();
  return {
    props: {
      biography,
    }
  }
}

export default Resume;