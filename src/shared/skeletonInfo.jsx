import React from 'react'

function SkeletonInfo({ hb1, wb1, hb2, wb2, hb3, wb3, }) {
    return (
        <>
            <div className='w-full flex flex-col space-y-7 p-6 lg:p-12 h-[400px] lg:h-[500px]'>

                <div className='skeleton' style={{ height: `${hb1}%`, width: `${wb1}%`}}></div>
                <div className='skeleton' style={{ height: `${hb2}%`, width: `${wb2}%`}}></div>
                <div className='skeleton' style={{ height: `${hb3}%`, width: `${wb3}%`}}></div>
            </div>
        </>
    )
}

export default SkeletonInfo