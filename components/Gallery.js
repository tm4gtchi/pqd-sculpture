import { useState, useEffect } from 'react';

const Gallery = ({urls, series}) => {
    // const []

//     useEffect(() => {
//     async function handleGallery(){
//       let urls = [];
//       projects.gallery.forEach((item) => {
//         urls.push(item.url)
//         return urls
//       }) 
//         setGalleryURLs(urls)
//     } handleGallery();
//   }, [])

    return (

        <div className="container overflow-y-scroll top-0">
        <div>
            <div className="flex flex-row  ">
                {urls.map((u, i) => {
                    return <img className="mr-11 h-80" src={u} alt={i}/>
                })}
            </div>
                <img className="fixed mt-12 w-1/2" src={series.mainImg} alt="project_page" />
        </div>
        </div>
    )
}

export default Gallery;

