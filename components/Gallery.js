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
            <div className="flex flex-row space-x-4">
                {urls.map((u, i) => {
                    return <img className="max-h-60" src={u} alt={i}/>
                })}
            </div>
    )
}

export default Gallery;

