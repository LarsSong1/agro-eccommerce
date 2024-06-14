import React, { useState } from 'react'
import Menu from './menu'


function Avatar({ classDiv, imgSrc, classImg }) {
    const [showItems, setShowItems] = useState('hidden')

    const controlProfile = (e)=>{
        setShowItems(current => current === 'hidden' ? 'block' : 'hidden');
    }

    return (
        <div className="avatar relative cursor-pointer" onClick={controlProfile} >
            <div className={classDiv} >
                <img className={classImg} src={imgSrc} alt='avatar' />
            </div>
            <div className='bg-white absolute top-14 right-4 rounded-md border-black'>
                {/* <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Inbox
                            <span className="badge badge-sm">99+</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Updates
                            <span className="badge badge-sm badge-warning">NEW</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            Stats
                            <span className="badge badge-xs badge-info"></span>
                        </a>
                    </li>
                </ul> */}
                <Menu className={showItems} text='Profile'/>  
               

            </div>
        </div>
    )
}

export default Avatar;