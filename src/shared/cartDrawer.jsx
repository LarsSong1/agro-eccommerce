import React, { useContext } from 'react'
import DrawerContext from '../context/DrawerContext'
import ProductOrderCard from './productOrderCard'
import Flex from '../components/Flex'
import { CloseIcon } from '../assets/content'
import BtnCustomized from './btnCustomized'
import { useNavigate } from 'react-router-dom'



function CartDrawer() {
  const { cartOpen, refCart, toggleCartDrawer } = useContext(DrawerContext)
  const navigate = useNavigate()


  return (
    <div ref={refCart} className={`h-screen min-h-[300px] fixed bg-white  lg:w-[500px] z-30 top-0 ri ${cartOpen ? 'right-0' : 'right-[100%]'} p-4`}>
      <Flex className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-bold'>Shopping Cart</h3>
        <div className='bg-black p-2 cursor-pointer rounded-lg'  onClick={toggleCartDrawer(false)}>
          <CloseIcon color='white'/>
        </div>

      </Flex>
      <div className='lg:h-[80vh] h-[55vh] overflow-y-scroll pe-2 flex flex-col gap-4'>
        <ProductOrderCard />
        <ProductOrderCard />
        <ProductOrderCard />
        <ProductOrderCard />
        <ProductOrderCard />
        <ProductOrderCard />
        <ProductOrderCard />
        <ProductOrderCard />
      </div>
      <div>
        <BtnCustomized text='Ver carrito' className='w-full text-center bg-black text-white pt-2 pb-2 flex justify-center items-center rounded-md mt-4 cursor-pointer ' onClick={()=>navigate('/cart')}/>
        <BtnCustomized text='Solicitar Ahora' className='flex justify-center text-center items-center pt-2 pb-2 border-2 border-black rounded-md mt-2 cursor-pointer' onClick={()=>navigate('/pay')}/>
      </div>
    </div>
  )
}

export default CartDrawer