import React, { useState } from 'react'
import { AddIcon } from '../assets/content'
import Flex from '../components/Flex'

function Counter({classNameIcon}) {
    const [number, setNumber] = useState(0)
    return (
        <Flex className='flex items-center gap-8'>
            <AddIcon className={classNameIcon} onClick={() => setNumber(number !== 0 ? number - 1 : number)} />
            <p className='font-bold text-2xl'>{number}</p>
            <AddIcon className={classNameIcon} onClick={() => setNumber(number + 1)} />

        </Flex>
    )
}

export default Counter