import React, { useState } from 'react'
import { AddIcon } from '../assets/content'
import Flex from '../components/Flex'

function Counter({ classNameIcon }) {
    const [number, setNumber] = useState(0)
    return (
        <Flex className='flex items-center gap-8'>
            <div className='cursor-pointer' onClick={() => setNumber(number !== 0 ? number - 1 : number)}>
                <AddIcon className={classNameIcon} />
            </div>
            <p className='font-bold text-2xl'>{number}</p>
            <div className='cursor-pointer' onClick={() => setNumber(number + 1)} >
                <AddIcon className={classNameIcon} />
            </div>

        </Flex>
    )
}

export default Counter