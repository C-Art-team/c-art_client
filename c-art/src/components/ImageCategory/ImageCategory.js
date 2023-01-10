import React from 'react'
import music from "./icon/music.png"
import effect from "./icon/volume.png"

function ImageCategory({ Previews, CategoryId }) {
    if (CategoryId === 2) {
        return (
            <img src={music} />
        )
    }
    if (CategoryId === 1) {
        return (
            <img src={effect} />
        )
    }
    else {
        return (
            <img className='object-fit h-60 w-96' src={Previews[0].sourceUrl} />
        )
    }
}

export default ImageCategory