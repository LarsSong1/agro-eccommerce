import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AutContext'
import { logout } from '../../services/supabase/Auth';
import Grid from '../../components/Grid';
import BtnBlack from '../../shared/btnBlack';
import { quicelum, zanahoriaImage } from '../../assets/content';
import Flex from '../../components/Flex';





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
                            <Flex className='flex'>
                                <div className="card w-[350px] h-[400px] bg-white shadow-2xl relative">
                                    <Flex className='bg-black w-[120px] h-[50px] absolute top-[-10px] left-10 z-10 rounded-b-xl flex items-center justify-center'>
                                        <h4 className='text-white text-center'>Oferta</h4>
                                    </Flex>
                                    <figure className='rounded-xl h-[280px] bg-customGray relative m-4 mb-0 overflow-hidden'>
                                        <img className=' absolute w-52 h-72 top-10 right-2' src={quicelum} alt="Shoes" />
                                    </figure>
                                    <div className="flex justify-center flex-row card-body h-[75px] p-4">
                                        <div className='basis-[50%] text-start'>
                                            <h2 className="card-title text-2xl">Quicelum</h2>
                                            <p>Categoria</p>
                                        </div>
                                        <div className='basis-[50%] text-end'>
                                            <p className='opacity-60'>$24.50</p>
                                            <p className='font-bold'>$12.50</p>
                                        </div>
                                    </div>
                                </div>

                            </Flex>
                        </Flex>
                    </Grid>

                    <button className='btn mt-20' onClick={logoutApp}>logout</button>





                </>
            ) : (
                <p>No hay usuario autenticado</p>
            )}



        </section>
    )
}

export default Home