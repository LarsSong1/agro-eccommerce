import React, { useState, useContext, useEffect } from 'react'
import { AddIcon } from '../assets/content'
import Flex from '../components/Flex'
import CartContext from '../context/CartContext'

function Counter({ classNameIcon, quantity, cartId }) {
    const {updateQuantity, cart} = useContext(CartContext)
    let numberState = quantity || 1
    const [number, setNumber] = useState(numberState)

    useEffect(() => {
        updateQuantity(cartId, number);
    }, [number]);

    return (
        <Flex className='flex items-center gap-8'>
            <div className='cursor-pointer' onClick={() => setNumber(number !== 1 ? number - 1 : number)}>
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