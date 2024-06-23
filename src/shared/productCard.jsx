import React from 'react'
import Flex from '../components/Flex'
import { CartIcon, SearchIcon, quicelum } from '../assets/content'

function ProductCard({ className, offer, src, category_name, name, realPrice, price, keyid, onClick }) {
    return (
        <div onClick={onClick} className={`card w-[320px] h-[400px] bg-white shadow-2xl relative ${className} cursor-pointer`}>
            <div className='absolute top-2 right-2 z-10 bg-white rounded-full p-2'>
                <CartIcon className='w-6 h-6' />
            </div>
            <Flex className={`bg-black w-[120px] h-[50px] ${offer ? 'absolute' : 'hidden'} top-[-10px]  left-10 z-10 rounded-b-xl flex items-center justify-center`}>
                <h4 className='text-white text-center'>Oferta</h4>
            </Flex>
            <figure className='rounded-xl h-[280px] bg-customGray relative m-4 mb-0 overflow-hidden'>
                <img className=' absolute w-52 h-72 top-10 right-2' src={src} alt="Shoes" />
            </figure>
            <div className="flex justify-center flex-row card-body h-[75px] p-4">
                <div className='basis-[50%] text-start'>
                    <h2 className="card-title text-2xl line-clamp-1">{name}</h2>
                    <p className='line-clamp-2 text-sm'>{category_name}</p>
                </div>
                <div className='basis-[50%] text-end'>
                    <p className='opacity-60 line-through line-clamp-1'>{realPrice}</p>
                    <p className='font-bold line-clamp-1 text-xl'>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard