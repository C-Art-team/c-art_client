import React from 'react'
import music from "./icon/music.png"
import effect from "./icon/volume.png"
// className="object-contain h-48 w-full transition duration-500 hover:scale-110"
function ImageCategory({ Previews, CategoryId, Page }) {
    if (Page === "dashboard") {
        if (CategoryId === 2) {
            return (
                <img draggable={false} className="object-contain h-60 w-full transition duration-500 hover:scale-110" src={music} />
            )
        }
        if (CategoryId === 1) {
            return (
                <img draggable={false} className="object-contain h-60 w-full transition duration-500 hover:scale-110" src={effect} />
            )
        }
        else {
            return (
                <img draggable={false} className='object-fit h-60 w-96 transition duration-500 hover:scale-110' src={Previews[0].sourceUrl} />
            )
        }
    } else {
        if (CategoryId === 2) {
            return (
                <img draggable={false} className="object-contain h-60 w-full transition duration-500 hover:scale-110" src={music} />
            )
        }
        if (CategoryId === 1) {
            return (
                <img draggable={false} className="object-contain h-60 w-full transition duration-500 hover:scale-110" src={effect} />
            )
        }
        else {
            return (
                <img draggable={false} className='object-fit h-60 w-96 transition duration-500 hover:scale-110' src={Previews[0].sourceUrl} />
            )
        }

    }
}

export default ImageCategory