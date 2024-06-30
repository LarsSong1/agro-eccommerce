import React, { useState, useContext, useEffect } from 'react'
import { AddIcon, RemoveIcon } from '../assets/content'
import Flex from '../components/Flex'
import CartContext from '../context/CartContext'
import { toast } from 'sonner'

function Counter({ classNameIcon, quantity, cartId, stock_item, onQuantityChange }) {
    const {updateQuantity, cart} = useContext(CartContext)
    let numberState = quantity || 1
    const [number, setNumber] = useState(numberState)
    const [noAdd, setNoAdd] = useState(null)
    

    useEffect(() => {
        if ( number <= stock_item  ){
            updateQuantity(cartId, number);
            setNoAdd(false);
        }else {
            setNoAdd(true)
            toast.error('No hay mas en Stock')
        }

        if (onQuantityChange) {
            onQuantityChange(number); 
        }
    }, [number]);


    

    return (
        <Flex className='flex items-center gap-8'>
            <div className='cursor-pointer' 
            onClick={() => setNumber(number !== 1 ? number - 1 : number)}
            
            >
                <RemoveIcon className={classNameIcon} />
            </div>
            <p className='font-bold text-2xl'>{
                noAdd ? number -1 : number
                }
                </p>
            <div className='cursor-pointer' 
            onClick={noAdd? ()=>{}:
                () => setNumber(number + 1)
            } 
            >
                <AddIcon className={classNameIcon} />
            </div>

        </Flex>
    )
}

export default Counter