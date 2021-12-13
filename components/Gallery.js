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
        <div className="object-contain w-1/2 md:w-8/12">

            <div className="flex flex-row flex-no-wrap overflow-x-scroll space-x-6">
                {urls.map((u, i) => {
                    return <img className="mt-6 h-60" src={u} alt={i}/>
                })} 
            </div>
                </div>

    )
}

export default Gallery;

