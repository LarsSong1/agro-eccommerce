import React, { useState } from 'react'
import Menu from './menu'


function Avatar({ classDiv, imgSrc, classImg }) {
    const [showItems, setShowItems] = useState('hidden')

    const controlProfile = (e)=>{
        setShowItems(current => current === 'hidden' ? 'block ' : 'hidden');
    }

    return (
        <div className="avatar relative cursor-pointer" onClick={controlProfile} >
            <div className={classDiv} >
                <img className={classImg} src={imgSrc} alt='avatar' />
            </div>
            <div className={`bg-white absolute top-14 right-4 rounded-md ${showItems ? 'p-0': 'p-2'} border-black`}>
                <Menu className={showItems} text='Profile'/>  
            </div>
        </div>
    )
}

export default Avatar;