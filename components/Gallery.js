import { useState, useEffect } from 'react';

const Gallery = ({urls, series}) => {

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

