import React, { useState, useEffect, useContext } from 'react'
import Grid from '../../components/Grid'
import { useNavigate, useParams } from 'react-router-dom'
import { BackArrowIcon, CartIcon, HearthIcon, ShopIcon, quicelum } from '../../assets/content'
import Flex from '../../components/Flex'
import Counter from '../../shared/counter'
import Progress from '../../shared/progress'
import BestProducts from '../../shared/BestProducts'
import DataContext from '../../context/DataContext'

function ProductDetail() {
    const navigate = useNavigate()
    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { getProductId } = useContext(DataContext)


    useEffect(()=>{
        const fetchProduct = async () => {
            const productFetched = await getProductId(productId);
            setProduct(productFetched)
            setLoading(false)
        }


        fetchProduct();
    }, [productId, getProductId])

    if (loading) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <span className="loading loading-dots loading-lg"></span>

            </div>
        )
    }


    console.log(product)



    return (
        <section className='w-full mt-20'>
            <Grid className='lg:mt-10 mt-2 lg:w-[80%] grid mx-auto grid-cols-6 lg:grid-cols-10 gap-2 lg:gap-10'>
                <div className='w-full col-span-10 lg:p-0 ps-8 pe-8'>
                    <Flex className='bg-customGray rounded-full w-[45px] flex justify-center'
                        onClick={() => navigate(-1)}
                    >
                        <BackArrowIcon size={40} color='black' />
                    </Flex>
                </div>
                <div className='lg:col-span-5 col-span-10 bg-customGray h-[300px] lg:h-[590px] relative overflow-hidden lg:rounded-md rounded-lg lg:p-0 lg:m-0 ms-8 me-8'>
                    <img className=' w-full absolute object-contain h-full lg:-bottom-20 -bottom-14 -right-20' src={quicelum} alt="Product" />
                </div>
                <div className='lg:col-span-5 col-span-10 lg:space-y-5 lg:mt-0 mt-4 lg:p-10 lg:pt-0 ps-8 pe-8 '>
                    <h3 className='text-customBrown font-medium'>OFERTA</h3>
                    <h1 className='text-6xl text-black mt-2 font-bold'>Quicelum</h1>
                    <Flex className='mt-4 flex items-center '>
                        <div className='w-2 h-2 rounded-full opacity-55 bg-black'></div>
                        <p className='text-sm ms-4 text-black opacity-75'>Categoria</p>
                    </Flex>
                    <div className='lg:mt-4 lg:text-start text-end'>
                        <h5 className='line-through opacity-50 text-mlg'>$22.50</h5>
                        <h4 className='text-4xl text-black font-bold '>$12.50</h4>
                    </div>
                    <Flex className='mt-8 flex justify-between items-center lg:space-y-20'>
                        <HearthIcon className='self-end' size={30} />
                        <Counter classNameIcon='bg-black rounded-full text-white w-8 h-8' />
                    </Flex>
                    <Flex className='flex w-full items-center space-y-10 gap-4'>
                        <a className='grow basis-[50%] flex justify-center items-center pb-3 pt-3 rounded-xl self-end border-2 cursor-pointer border-black'>
                            <ShopIcon />
                            <p className='ps-2 '>Añadir</p>
                        </a>
                        <a className='bg-black  basis-[50%] grow flex justify-center cursor-pointer items-center pb-4 pt-4 rounded-xl'>
                            <p className='text-white'>Comprar Ahora</p>
                        </a>
                    </Flex>
                </div>
                <div className='lg:col-span-5 mt-4 col-span-10 lg:p-0 ps-8 pe-8'>
                    <h3 className='font-bold text-2xl text-black lg:mt-0 mt-4'>Información del Producto</h3>
                    <div className='inline-flex mt-2 gap-4'>
                        <h5 className='border-b-2 border-customOrange cursor-pointer font-bold'>Descripción</h5>
                        <h5 className='opacity-75 font-extralight cursor-pointer'>Detalles del Producto</h5>
                    </div>
                    <div className='mt-6 opacity-85 font-light text-sm'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere, nibh non ornare euismod, felis arcu iaculis arcu, nec malesuada massa justo ac risus. Donec euismod est congue, lacinia libero iaculis, suscipit massa. Duis congue elementum mi, in rutrum quam laoreet ut. Vivamus quis libero fermentum, facilisis tellus vitae, suscipit nisl. Maecenas cursus malesuada turpis, in </p>
                    </div>


                    <div className='space-y-5 mt-10'>
                        <h5 className='font-bold'>Nota*</h5>
                        <p className='opacity-85 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere, nibh non ornare euismod, felis arcu iaculis arcu, nec malesuada massa justo ac risus. Donec euismod est congue, lacinia libero iaculis, suscipit massa. Duis congue elementum mi, in rutrum quam laoreet ut. Vivamus quis libero fermentum, facilisis tellus vitae, suscipit nisl. Maecenas cursus malesuada turpis, in </p>
                    </div>

                </div>

                <div className='lg:col-span-5 col-span-10 lg:mt-0 mt-8 lg:p-0 ps-8 pe-8'>
                    <Progress />
                </div>



                <BestProducts className='' />
            </Grid>


        </section>
    )
}

export default ProductDetail