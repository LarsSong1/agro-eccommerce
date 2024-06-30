import React, { useContext, useEffect, useState } from 'react'
import Grid from '../../components/Grid'
import Flex from '../../components/Flex'
import { CarTransportIcon, ProfileIcon } from '../../assets/content'
import BtnCustomized from '../../shared/btnCustomized'
import Input from '../../shared/Input'
import ProductOrderCard from '../../shared/productOrderCard'
import BtnBlack from '../../shared/btnBlack'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import BackPage from '../../shared/backPage'
import ProfileContext from '../../context/ProfileContext'
import FormProfile from '../Profile/formProfile'

function PayData() {
    const { loading, cart } = useContext(CartContext)
    

    return (
        <section className='w-full'>
            <Grid className='mt-28 lg:w-[80%] grid mx-auto grid-cols-6 lg:grid-cols-10 w-[85%] lg:gap-5 mb-10'>

                <BackPage />
                <h2 className='text-black font-bold text-2xl mt-2 col-span-10'>Pago</h2>
                <p className='col-span-10 mb-1 text-sm opacity-50'>Estos son datos de tu perfil, puedes modificarlos y guardarlos</p>
                <FormProfile classNameDiv='lg:col-span-5 col-span-10'/>



                <div className='lg:col-span-5 col-span-10' >
                    <h5 className='font-bold mt-2 mb-4'>Resumen Ordenes</h5>
                    <Flex className='flex flex-col gap-4'>
                        {loading ? (
                            <p className='text-center mt-2'>Loading...</p>
                        ) : (
                            cart && cart.length > 0 ? (
                                cart.map(cartP => (
                                    <ProductOrderCard
                                        key={cartP.id}
                                        name={cartP.Products?.name}
                                        category={cartP.Products?.Category?.name}
                                        src={cartP.Products?.img_url}
                                        quantity={cartP.quantity}
                                        price={cartP.Products?.price}
                                        cart_id={cartP.id}
                                        product_id={cartP.product_id}
                                        stock={cartP.Products.stock}

                                    />
                                ))
                            ) : (
                                <p className='text-center mt-2'>Your cart is empty</p>
                            )
                        )}
                    </Flex>

                    <div className='mt-10'>
                        <Flex className='flex items-center justify-between mb-4'>
                            <p className='text-sm'>Subtotal</p>
                            <p className='font-bold text-sm'>$?</p>
                        </Flex>
                        <Flex className='flex items-center justify-between mb-4'>
                            <p className='text-sm'>Delivery y Empaquetado</p>
                            <p className='font-bold text-sm'>Valores Apartes</p>
                        </Flex>
                        <Flex className='flex items-center justify-between mb-4'>
                            <p className='text-sm font-bold'>Total</p>
                            <p className='font-bold text-sm'>$?</p>
                        </Flex>
                    </div>
                    <div className='w-full'>
                        <BtnBlack text='Confirmar compra' className='w-full' />
                    </div>
                </div>

            </Grid>

        </section>
    )
}

export default PayData