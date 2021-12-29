import { useState, useEffect } from 'react';

const Gallery = ({urls, series}) => {

    const result = () => {
        const r = series.gallery.map(item => ({ value: item.caption, text: item.title }));
        console.log(r)
        result()
    } 

    return (
        <div className="object-contain w-1/2">
            <div className="flex flex-row flex-no-wrap overflow-x-scroll space-x-6">
                {urls.map((u, i) => {
                    return <img className="mt-6 h-60" src={u} alt={i}/>
                })} 
            </div>
                </div>

    )
}

export default Gallery;

