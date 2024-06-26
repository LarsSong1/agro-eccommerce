import React, { useContext } from 'react'
import { CloseIcon, HearthIcon, StarIcon, TrashIcon } from '../assets/content'
import Flex from '../components/Flex'
import Counter from './counter'
import CartContext from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

function ProductOrderCard({ name, price, category, src, alt, quantity, cart_id, product_id }) {
    const { deleteCartItems } = useContext(CartContext)
    const navigate = useNavigate()


    const deleteItemCart = () => {
        deleteCartItems(cart_id)
    }

    return (
        <div>
            <Flex className='flex gap-4'>
                <div className='basis-[20%] h-[145px] relative bg-customGray rounded-md p-4'>
                    <img className='w-full h-full object-contain ' src={src} alt={`imagen-${alt}-producto`} />
                </div>
                <div className='basis-[80%]'>
                    <Flex className='flex justify-between'>
                        <h3 className='font-bold cursor-pointer' onClick={()=>navigate(`/products/${product_id}`)}>{name}</h3>
                        <p className='font-bold'>{price}</p>
                    </Flex>
                    <p>{category}</p>
                    <Flex className='items-center flex gap-2'>
                        <StarIcon className='text-customYellow' />
                        <p className='text-xs'>4.8</p>

                    </Flex>
                    <Flex className='flex justify-between mt-10'>
                        <Flex className='flex items-center gap-4'>
                            <HearthIcon className='text-black w-5 h-5' />
                            <TrashIcon className='text-black w-4 h-4 cursor-pointer' onClick={deleteItemCart} />
                        </Flex>
                        <Flex>
                            <Counter quantity={quantity} classNameIcon='rounded-full border-[.1px] border-black' />
                        </Flex>
                    </Flex>
                </div>

            </Flex>
        </div>
    )
}

export default ProductOrderCard