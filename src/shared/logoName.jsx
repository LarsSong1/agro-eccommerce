import React from 'react'
import { agromaticsLogo } from '../assets/content'


function LogoName({name}) {
  return (
    <div className='flex items-center'>
        <img className='w-12 h-12' src={agromaticsLogo} alt="logo" />
        <h2 className='text-white text-2xl font-bold'>{name}</h2>
    </div>
  )
}

export default LogoName