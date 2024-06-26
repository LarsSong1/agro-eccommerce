import React, {useContext} from 'react'
import Grid from '../../components/Grid'
import Flex from '../../components/Flex'
import { CarTransportIcon, ProfileIcon } from '../../assets/content'
import BtnCustomized from '../../shared/btnCustomized'
import Input from '../../shared/Input'
import ProductOrderCard from '../../shared/productOrderCard'
import BtnBlack from '../../shared/btnBlack'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/CartContext'

function PayData() {
    const { loading, cart } = useContext(CartContext) 
    const navigate = useNavigate()


    console.log(cart)
    return (
        <section className='w-full'>
            <Grid className='mt-28 lg:w-[80%] grid mx-auto grid-cols-6 lg:grid-cols-10 w-[85%] lg:gap-5 mb-10'>
                <h2 className='text-black font-bold text-2xl col-span-10'>Pago</h2>
                <div className='lg:col-span-5 col-span-10'>
                    <Flex className='flex mt-10 border-[2.6px] rounded-lg p-4 items-center'>
                        <ProfileIcon size={30} className='basis-[10$] opacity-70 self-start' />
                        <Flex className='flex justify-between items-center basis-[90%] ms-2'>
                            <div>
                                <h4 className='text-sm'>INFORMACION DE CONTACTO</h4>
                                <p className='font-bold text-sm'>Damaris Zambrano +593-xxx-xxxx</p>
                            </div>
                            <BtnCustomized className='border-[1.5px] cursor-pointer border-black rounded-2xl p-2 ps-4 pe-4 text-sm' text='Editar' />
                        </Flex>
                    </Flex>
                    <Flex className='flex mt-4 border-[2.6px] rounded-lg p-4 items-center'>
                        <CarTransportIcon size={30} className='basis-[10$] opacity-70 self-start' />
                        <Flex className='flex justify-between items-center basis-[90%] ms-2'>
                            <div>
                                <h4 className='text-sm'>INFORMACION DE ENVIO</h4>
                                <p className='font-bold text-sm'>Naranjal idk </p>
                            </div>
                            <BtnCustomized className='border-[1.5px] cursor-pointer border-black text-sm rounded-2xl p-2 ps-4 pe-4' text='Editar' />
                        </Flex>
                    </Flex>
                    <div className='w-full mt-6'>
                        <Flex className='flex gap-4'>
                            <Input label='Nombres' type='text' placeholder='Damaris Dayanara' className='grow' />
                            <Input label='Apellidos' type='text' placeholder='Damaris Dayanara' className='grow' />
                        </Flex>
                        <div className='mt-2'>
                            <Input label='Dirección' type='text' placeholder='Naranjal idk' />
                        </div>
                        <Flex className='flex gap-4 mt-2'>
                            <Input label='Ciudad' type='text' placeholder='Guayaquil' className='grow' />
                            <Input label='País' type='text' placeholder='Ecuador' className='grow' />
                        </Flex>
                        <div className='mt-2'>
                            <Input label='Provincia' type='text' placeholder='Provincia' />
                        </div>
                        <div className='mt-2'>
                            <Input label='Código Postal' type='text' placeholder='12415' />
                        </div>
                        <div className='mt-4'>
                            <h5 className='font-bold text-sm'>Horario de entrega</h5>
                            <Flex className='flex justify-center gap-20 flex-wrap mt-4'>
                                <Flex className='flex'>
                                    <input type="radio" name="radio-1" className="radio" checked />
                                    <p className='ms-2 text-black'>En casa (todo el dia)</p>
                                </Flex>
                                <Flex className='flex'>
                                    <input type="radio" name="radio-1" className="radio" />
                                    <p className='ms-2 text-black'>Trabajo(Entregas 9 AM - 5 PM)</p>
                                </Flex>
                            </Flex>

                        </div>
                        <div className='mt-10 inline-flex gap-4 w-full justify-end'>
                            <BtnCustomized text='Guardar' className='text-white bg-black w-[100px] rounded-xl flex justify-center cursor-pointer items-center pt-2 pb-2' />
                            <BtnCustomized text='Cancelar' className='text-black cursor-pointer w-[100px] rounded-xl flex justify-center border-black border-2 items-center pt-2 pb-2' onClick={() => navigate('/')} />
                        </div>
                    </div>

                </div>
                <div className='lg:col-span-5 col-span-10' >
                    <h5 className='font-bold mt-10 mb-4'>Resumen Ordenes</h5>
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