import React from 'react'
import { SearchIcon } from '../assets/content'

function InputSearch({className}) {
    return (
        <div className={className}>
            <label className="relative h-[50px] gap-2">
                <SearchIcon className='absolute top-0 left-3 text-black' />
                <input type="text" className="grow border-[1.2px] border-black border-opacity-25 rounded-2xl ps-10 h-[40px] w-[98%]" placeholder="Buscar Producto" />

            </label>
        </div>
    )
}

export default InputSearch