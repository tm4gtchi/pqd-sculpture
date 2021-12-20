import PageLayout from '../../components/PageLayout'

export default function Bio () {

  return(
      <PageLayout>
       {/* LEFT SIDE */}
        <div className="object-center container grid grid-rows-2 gap-4 w-screen h-screen m-4 place-content-center">
        <section className="row-span-1 w-full flex flex-col mt-12 place-content-evenly md:flex-row">
            <div className="text-container bg-white w-3/6">
              <div className="text-div w-9/12 ">
                <span>title</span>
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

// export async function getStaticProps({params, preview = false, previewData}) {
//   const myInfo = await geAuthorInfoSlug(params.slug, preview);
//   return {
//     props: { myInfo, preview },
//     revalidate: 1
//   }
// }
// // TODO: Introduce fallback
// export async function getStaticPaths() {
//   const myInfo = await getAuthorInfo();
//   const paths = myInfo?.map(info => ({params: {slug: info.slug}}));
//   return {
//     paths,
//     fallback: true
//   }
// }

// export default Bio;

