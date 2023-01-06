import React from 'react'
import Card from '../../components/Card/Card'
import Carousel from '../../components/Carousel/Carousel'

function Dashboard() {
    return (
        <>
            <div className='flex justify-center'>
                <Carousel />
            </div>
            <div className='flex py-5 justify-between'>
                <h1 className='px-16'>ARTWORKS</h1>
                <div className='flex px-16'>
                    <div className='px-2'>
                        <div className="badge badge-accent px-5 py-5">accent</div>
                    </div>
                    <div className='px-2'>
                        <div className="badge badge-accent px-5 py-5">accent</div>
                    </div>
                    <div className='px-2'>
                        <div className="badge badge-accent px-5 py-5">accent</div>
                    </div>
                    <div className='px-2'>
                        <div className="badge badge-accent px-5 py-5">accent</div>
                    </div>
                    <div className='px-2'>
                        <div className="badge badge-accent px-5 py-5">accent</div>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-4 gap-1 px-16">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>

    )
}

export default Dashboard