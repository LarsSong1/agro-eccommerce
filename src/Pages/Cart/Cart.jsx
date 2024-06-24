import React from 'react'
import Grid from '../../components/Grid'
import ProductOrderCard from '../../shared/productOrderCard'
import Flex from '../../components/Flex'
import BtnCustomized from '../../shared/btnCustomized'

function Cart() {
    return (
        <section className='w-full'>
            <Grid className='mt-28 lg:w-[80%] grid mx-auto grid-cols-6 lg:grid-cols-10 gap:2 lg:gap-4'>
                <div className='col-span-full font-bold text-2xl border-b-2 border-black border-opacity-25 pb-4 lg:w-full w-[90%] mx-auto'>
                    <h2>Tu Carrito</h2>
                </div>
                <Flex className=' lg:col-span-5 flex flex-col gap-4 col-span-6 mx-auto mt-4 lg:mt-0 lg:w-full w-[90%]'>
                    <ProductOrderCard/>
                    <ProductOrderCard/>
                    <ProductOrderCard/>
                </Flex>
                <div className=' lg:col-span-5 col-span-6 mt-10 lg:mt-0 mx-auto lg:p-10  lg:pt-0 lg:w-full w-[90%]'>
                    <h3 className='font-bold text-xl'>Detalles de Compra</h3>
                    <div className='mt-4 space-y-4'>
                        <Flex className='flex justify-between pb-4 border-b-2 border-black border-opacity-10'>
                            <h5 className='font-light'>Subtotal</h5>
                            <p className='font-bold'>$12.20</p>
                        </Flex>
                        <Flex className='flex justify-between pb-4 border-b-2 border-black border-opacity-10'>
                            <h5 className='font-light'>Delivery y Empaquetado</h5>
                            <div>
                            <p className='font-bold text-end'>Servientrega</p>
                            <p className='text-end text-sm'>Valores Apartes</p>
                            </div>
                        </Flex>
                        <Flex className='flex justify-between pb-4 border-b-2 border-black border-opacity-10'>
                            <h5 className='font-light'>Total</h5>
                            <p className='font-bold'>$?</p>
                        </Flex>
                        <BtnCustomized className='bg-black text-white text-center flex justify-center pt-4 pb-4 rounded-lg w-full cursor-pointer' text='Solicitar Ahora'/>
                        
                    </div>
                </div>
            </Grid>
        </section>
    )
}

export default Cart