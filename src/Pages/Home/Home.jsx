import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AutContext'
import { logout } from '../../services/supabase/Auth';
import Grid from '../../components/Grid';
import BtnBlack from '../../shared/btnBlack';
import { CleanFilterIcon, quicelum, zanahoriaImage } from '../../assets/content';
import Flex from '../../components/Flex';
import ProductCard from '../../shared/productCard';
import NotFound from '../Errors/notFound';
import BestProducts from '../../shared/BestProducts';
import { useNavigate } from 'react-router-dom';
import CategoryContext from '../../context/CategoryContext';
import NewProduct from '../../components/Home/newProduct';









function Home() {

    const { user, loading } = useContext(AuthContext)
    const { categoryName } = useContext(CategoryContext)
    const [ loadingState, setLoadingState ] = useState(true)
   


    useEffect(() => {
        if (!loading) {
            setLoadingState(false)

        }
    }, [loading])


    const navigate = useNavigate()

    const logoutApp = async () => {
        await logout();
    };



    if (loadingState) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                <span className="loading loading-dots loading-lg"></span>

            </div>
        )
    }


    return (
        <section className='w-full'>
            {user ? (
                <>

                    <Grid className='mt-28 lg:w-[80%] grid mx-auto grid-cols-6 lg:grid-cols-10 gap:2 lg:gap-4'>
                        <Flex className='bg-customGray h-[350px] lg:h-[500px] flex col-span-6 rounded-xl m-4 mb-0 lg:m-0'>
                            <NewProduct />

                        </Flex>
                        <Flex className='col-span-6 lg:col-span-4 m-4 lg:m-0 flex bg-customYellow h-[350px] lg:h-[500px] rounded-xl relative overflow-hidden'>
                            <div className='p-6 lg:p-12 w-full'>
                                <h2 className='lg:font-bold font-black text-black text-lg lg:text-2xl xl:text-4xl w-full lg:w-2/3 mb-0 lg:mb-10'>Mensaje Call To Action Lorem ipsum dolor sitt.</h2>
                                <p className='text-base lg:text-xl font-light line-clamp-2 xl:line-clamp-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic explicabo iste ratione expedita dignissimos pariatur culpa! Est velit incidunt magni, similique fugiat fugit mollitia culpa, voluptas animi explicabo modi.</p>
                                <BtnBlack text='Contactanos' className='lg:w-2/3 w-[130px] lg:h-1/6 mt-4 mb-4' onClick={() => navigate('/contact')} />
                            </div>
                            <img className='absolute h-[15em] lg:h-[18em] bottom-[-0.5em] lg:top-0 right-0' src={zanahoriaImage} alt="zanahoria-img" />


                        </Flex>
                        <BestProducts />
                        <div className='col-span-10 mx-auto mt-14'>
                            <h1 className='mx-auto text-2xl lg:text-6xl text-black font-bold text-center'>Insumos Agricolas</h1>
                            <p className='text-center text-xl mt-2 mb-10'>A tu disposición</p>
                            <Flex className='flex rounded-2xl w-[360px] items-center border-t-0 border-2 h-[50px]  border-customGray mx-auto'>
                                <select className="w-[250px] ps-4 focus:rounded-l-2xl">
                                    <option defaultValue='Elige Opción'>Bioestimulantes</option>
                                    {
                                        categoryName.map((category, id)=>(
                                            <option key={id}>{category.name}</option>
                                        ))
                                    }



                                </select>
                                <div className='w-[120px] mx-auto me-1 justify-center flex items-center bg-customGray h-[40px]  rounded-r-2xl '>
                                    <p className='inline-flex text-xs font-bold'>
                                        Limpiar Filtro
                                        <CleanFilterIcon className='ms-2 mt-[0.5px]' />
                                    </p>
                                </div>

                            </Flex>
                            <Flex className='mt-10 flex flex-wrap gap-4 justify-center'>
                                <ProductCard className='' />
                                <ProductCard className='' />
                                <ProductCard className='' />
                                <ProductCard className='' />
                                <ProductCard className='' />
                                <ProductCard className='' />
                                <ProductCard className='' />
                                <ProductCard className='' />


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