import React from 'react'
import { HearthIcon, StarIcon, TrashIcon, quicelum } from '../assets/content'
import Flex from '../components/Flex'
import Counter from './counter'

function ProductOrderCard() {
    return (
        <div>
            <Flex className='flex gap-4'>
                <div className='basis-[20%] h-[145px] relative bg-customGray rounded-md p-4'>
                    <img className='w-full h-full object-contain ' src={quicelum} alt="productImage" />
                </div>
                <div className='basis-[80%]'>
                    <Flex className='flex justify-between'>
                        <h3 className='font-bold'>Quicelum</h3>
                        <p className='font-bold'>12.50</p>
                    </Flex>
                    <p>Mejoras del Suelo</p>
                    <Flex className='items-center flex gap-2'>
                        <StarIcon className='text-customYellow' />
                        <p className='text-xs'>4.8</p>

                    </Flex>
                    <Flex className='flex justify-between mt-10'>
                        <Flex className='flex items-center gap-4'>
                            <HearthIcon className='text-black w-5 h-5'/>
                            <TrashIcon className='text-black w-4 h-4'/>
                        </Flex>
                        <Flex>
                            <Counter classNameIcon='rounded-full border-[.1px] border-black'/>
                        </Flex>
                    </Flex>
                </div>
                
            </Flex>
        </div>
    )
}

export default ProductOrderCard