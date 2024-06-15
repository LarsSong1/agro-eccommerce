import React from 'react'
import Flex from '../components/Flex'
import { CartIcon, quicelum } from '../assets/content'

function ProductCard() {
    return (
        <div className="card w-[350px] h-[400px] bg-white shadow-2xl relative">
            <div className='absolute top-2 right-2 z-10 bg-white rounded-full p-2'>
                <CartIcon className='w-6 h-6'/>
            </div>
            <Flex className='bg-black w-[120px] h-[50px] absolute top-[-10px] left-10 z-10 rounded-b-xl flex items-center justify-center'>
                <h4 className='text-white text-center'>Oferta</h4>
            </Flex>
            <figure className='rounded-xl h-[280px] bg-customGray relative m-4 mb-0 overflow-hidden'>
                <img className=' absolute w-52 h-72 top-10 right-2' src={quicelum} alt="Shoes" />
            </figure>
            <div className="flex justify-center flex-row card-body h-[75px] p-4">
                <div className='basis-[50%] text-start'>
                    <h2 className="card-title text-2xl">Quicelum</h2>
                    <p>Categoria</p>
                </div>
                <div className='basis-[50%] text-end'>
                    <p className='opacity-60'>$24.50</p>
                    <p className='font-bold'>$12.50</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard