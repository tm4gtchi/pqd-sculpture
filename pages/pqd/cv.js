import PageLayout from '../../components/PageLayout'

export default function Resume () {

  return(
      <PageLayout>
        {/* LEFT SIDE */}
        <div className="object-center container grid grid-rows-2 gap-4 w-screen h-screen m-4 place-content-center">
        <section className="row-span-1 w-full flex flex-col mt-12 place-content-evenly md:flex-row">
            <div className="text-container bg-white w-3/6">
              <div className="text-div w-9/12 ">
                <span>Resume Page</span>
                <p className="text-xs">pablos resume</p>
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