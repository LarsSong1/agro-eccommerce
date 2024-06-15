import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AutContext'
import { logout } from '../../services/supabase/Auth';
import Grid from '../../components/Grid';
import BtnBlack from '../../shared/btnBlack';
import { CleanFilterIcon, quicelum, zanahoriaImage } from '../../assets/content';
import Flex from '../../components/Flex';
import ProductCard from '../../shared/productCard';
import NotFound from '../Errors/notFound';
import Slider from '../../shared/slider';





function Home() {

    const { user } = useContext(AuthContext)



    const logoutApp = async () => {
        await logout();

    };
    return (
        <section className='w-full'>
            {user ? (
                <>
                    <Grid className='mt-28 lg:w-[80%] grid mx-auto grid-cols-6 lg:grid-cols-10 gap:2 lg:gap-4'>

                        <Flex className='bg-customGray h-[350px] lg:h-[500px] flex col-span-6 rounded-xl m-4 mb-0 lg:m-0'>
                            <div className='p-6 lg:p-12 w-4/6'>
                                <h5 className='text-customOrange mb-4 text-xl'>Nuevo!</h5>
                                <h1 className='text-black text-4xl lg:text-6xl font-bold mb-4'>QUICELUM</h1>
                                <h2 className='text-xl font-bold lg:text-4xl lg:w-5/6 mb-4 lg:mb-14 text-black'>Estimula la Floración, Cuajado</h2>
                                <p className='line-clamp-2'>Estimula la Floración, Cuajado Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti eveniet expedita deleniti </p>
                                <BtnBlack className='mt-4 lg:w-2/4 w-[130px] lg:h-1/6 mb-4' text='Ver Productos' />
                            </div>
                            <div className='w-2/6 relative overflow-hidden'>
                                <img className='relative lg:absolute top-0 lg:top-10 h-[400px] lg:h-[500px]' src={quicelum} alt="product" />
                            </div>

                        </Flex>
                        <Flex className='col-span-6 lg:col-span-4 m-4 lg:m-0 flex bg-customYellow h-[350px] lg:h-[500px] rounded-xl relative overflow-hidden'>
                            <div className='p-6 lg:p-12 w-full'>
                                <h2 className='lg:font-bold font-black text-black text-lg lg:text-2xl xl:text-4xl w-full lg:w-2/3 mb-0 lg:mb-10'>Mensaje Call To Action Lorem ipsum dolor sitt.</h2>
                                <p className='text-base lg:text-xl font-light line-clamp-2 xl:line-clamp-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic explicabo iste ratione expedita dignissimos pariatur culpa! Est velit incidunt magni, similique fugiat fugit mollitia culpa, voluptas animi explicabo modi.</p>
                                <BtnBlack text='Contactanos' className='lg:w-2/3 w-[130px] lg:h-1/6 mt-4 mb-4' />
                            </div>
                            <img className='absolute h-[15em] lg:h-[18em] bottom-[-0.5em] lg:top-0 right-0' src={zanahoriaImage} alt="zanahoria-img" />


                        </Flex>
                        <Flex className='flex flex-col justify-center col-span-10 bg-customGray rounded-xl h-[560px] lg:p-12 p-6'>
                            <h2 className='text-xl font-bold lg:text-4xl text-black mb-4'>Mejores Productos</h2>
                            <Flex className='flex gap-4'>
                                <Slider />

                            </Flex>
                        </Flex>
                        <div className='col-span-10 mx-auto mt-14'>
                            <h1 className='mx-auto text-2xl lg:text-6xl text-black font-bold text-center'>Insumos Agricolas</h1>
                            <p className='text-center text-xl mt-2 mb-10'>A tu disposición</p>
                            <Flex className='flex rounded-2xl w-[360px] items-center border-t-0 border-2 h-[50px]  border-customGray mx-auto'>
                                <select className=" lg:w-[250px] ps-4 focus:rounded-l-2xl">
                                    <option selected>best headless CMS</option>
                                    <option>Strapi</option>
                                    <option>Ghost</option>
                                    <option>Netlify CMS</option>
                                    <option>Sanity</option>
                                </select>
                                <div className='w-[120px] me-1 justify-center flex items-center bg-customGray h-[40px]  rounded-r-2xl '>
                                    <p className='inline-flex text-xs font-bold'>
                                        Limpiar Filtro 
                                        <CleanFilterIcon  className='ms-2 mt-[0.5px]'/>
                                    </p>
                                </div>

                            </Flex>
                        </div>


                    </Grid>







                </>
            ) : (
                <NotFound />
            )}



        </section>
    )
}

export default Home