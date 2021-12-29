import PageLayout from '../../components/PageLayout'

const Bio = () => {

  return(
      <PageLayout>
       {/* LEFT SIDE */}
        <div className="object-center container grid grid-rows-2 gap-4 w-screen h-screen m-4 place-content-center">
        <section className="row-span-1 w-full flex flex-col mt-12 place-content-evenly md:flex-row">
            <div className="text-container bg-white w-3/6">
              <div className="text-div w-9/12 ">
                <span>
                  Meu trabalho e minha pesquisa aborda a noção de paisagem urbana e rural  a partir de residuos que encontro no solo. Utilizo fragmentos de coisas que procuro nas cidades e estabelezco  associações híbridas entre essas imagens e o lugar. Costumo coletar sementes, penas, folhas e caixas bitucas de cigarro, pedaços de plástico, que servem como objetos de arquivo, e que também permitem entender algunas mudanças do paisagem em diferentes periodos de tempo. Trabalho esses fragmentos como se fossem fósseis, pedaços de tempo ou espaço, que remetem a histórias que aconte- ceram, e que estão presentes. Várias das propostas que desenvolvo  com estes residuos, referem-se a métodos científicos que utilizo para repensar os discursos e narrativas do pensamento moderno iluminista (é o caso dos métodos de coleta para Gabinetes europeus), para identificar como esse pensamento sobrevive e flutua nas imagens do que entendemos hoje como paisagem nas cidades. 
</span>
                <p className="text-xs">hi</p>
              </div>
            </div>
        </section>
        <section className="row-span-1 w-full flex flex-col place-content-evenly md:flex-row">
            <div className="text-container bg-white w-3/6">
              <div className="text-div w-9/12">
                <span>detail text</span>
                <p>lorem ipsem</p>
                <p className="text-xs"> blah blah</p>
              </div>
            </div>
        </section>
        </div>
      </PageLayout>
  )
}

export default Bio;