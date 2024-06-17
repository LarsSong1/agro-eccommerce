import React from 'react'
import Flex from '../components/Flex'
import Slider from './slider'

function BestProducts({className}) {
    return (
        <Flex className={`flex flex-col justify-center col-span-10 bg-customGray rounded-xl h-[560px] lg:p-12 p-6 ${className}`}>
            <h2 className='text-xl font-bold lg:text-4xl text-black mb-4'>Mejores Productos</h2>
            <Flex className='flex'>
                <Slider />
            </Flex>
        </Flex>
    )
}

export default BestProducts