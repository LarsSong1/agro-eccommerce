import React from 'react'

function Input({label, type, placeholder, onChange, className, inputValue}) {
  return (
    <div className={className}>
        <h5 className='font-bold text-sm'>{label}</h5>
        <div className='mt-2'>
            <input value={inputValue} className='w-full text-start border-black border-opacity-10 h-[40px] text-sm border-2 hover:bg-white placeholder:font-light font-light bg-white text-black rounded-sm ps-4' type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    </div>
  )
}

export default Input