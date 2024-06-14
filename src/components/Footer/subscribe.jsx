import React from 'react'
import { newsletter } from './footerData'
import { whatsappLogo } from '../../assets/content'

function Subscribe() {
  return (
    <div className="items-stretch justify-between space-y-5 rounded-2xl bg-white/10 p-5 md:flex md:space-y-0">
      <div className="basis-[52%] space-y-4">
        <h3 className="text-2xl font-medium">{newsletter.heading}</h3>
        <input
          type="text"
          sizeClass="h-12 px-0 py-3"
          rounded="rounded-none"
          className="border-b-2 border-transparent border-b-neutral-400 bg-transparent placeholder:text-sm placeholder:text-neutral-200 focus:border-transparent"
          placeholder="Your email@email.com"
        />
      </div>
      <div className="basis-[43%] space-y-2">
        <p className="text-neutral-400">{newsletter.description}</p>
        <div className='flex gap-4'>
          <a className='btn bg-black hover:text-black border-none text-white' href="">Enviar</a>
          <a href="">
            <img className='w-10 h-10' src={whatsappLogo} alt="logo-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Subscribe