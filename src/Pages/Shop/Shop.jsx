import React, { useState, useContext, useEffect } from 'react'
import Grid from '../../components/Grid'
import Flex from '../../components/Flex'
import Badges from '../../shared/badges'
import InputSearch from '../../shared/inputSearch'
import Range from '../../shared/range'
import BtnIcon from '../../shared/btnIcon'
import { CleanFilterIcon, FilterIcon2 } from '../../assets/content'
import ProductCard from '../../shared/productCard'
import BestProducts from '../../shared/BestProducts'
import CategoryContext from '../../context/CategoryContext'
import DataContext from '../../context/DataContext'
import BtnBlack from '../../shared/btnBlack'
import { useNavigate } from 'react-router-dom'


function Shop() {
  const { categoryName } = useContext(CategoryContext)
  const { productsNoLimit } = useContext(DataContext)
  
  const [activeBadge, setActiveBadge] = useState('All')
  const [ dataProducts, setDataProducts ] = useState([])
  const [filterCategory, setFilterCategory] = useState('')
  const [filterInput, setFilterInput] = useState('')
  const navigate = useNavigate()

  const handleFilter = (category, categoryName) => {
    setActiveBadge(category)
    setFilterCategory(categoryName)
  }


  useEffect(() => {
    let filteredProducts = productsNoLimit;

    if (filterCategory) {
      filteredProducts = filteredProducts.filter(product => product.Category.name === filterCategory);
    }

    if (filterInput) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(filterInput.toLowerCase())
      );
    }

    setDataProducts(filteredProducts);


  

}, [filterCategory, productsNoLimit, filterInput]);


  return (
    <section className='w-full mt-28 mx-auto'>
      <Grid className='grid col-span-10 grid-cols-10 lg:w-[80%] mx-auto '>
        <Flex className='lg:col-span-2 col-span-10 lg:ps-0 lg:pe-0  pe-8 ps-8'>
          <div className=''>
            <h2 className='text-2xl text-start'>Filtrar Productos</h2>
            <p className='text-md'>Categorias</p>
          </div>
          <div className='mt-10'>
            <Flex className='flex flex-wrap items-center gap-2 w-full'>
              {categoryName.map((category) => (
                <Badges
                  key={category.id}
                  text={category.name}
                  active={activeBadge === category}
                  onClick={() => handleFilter(category, category.name)}
                />
              ))}
            </Flex>
            {/* <div>
              <Range/>
            </div> */}


          </div>
        </Flex>
        <div className='lg:col-span-8 col-span-10 ps-8 pe-8 lg:pe-0 lg:ps-9'>
          <Flex className='flex gap-2 flex-wrap'>
            <InputSearch className='grow mb-2' onChange={(e)=>setFilterInput(e.target.value)} placeholderContent='Buscar Producto'/>
            <BtnIcon text='filtros' icon={<CleanFilterIcon />} onClick={()=>setDataProducts(productsNoLimit)}/>
            {/* <BtnIcon text='Más popular' icon={<FilterIcon2 />} /> */}
          </Flex>
          <Grid className='mt-10 gap-10 grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 place-items-center'>
            {dataProducts.map(product => (
              <ProductCard
                keyid={product.id}
                name={product.name}
                category_name={product.Category.name}
                src={product.img_url}
                offer={product.offert}
                price={product.price}
                realPrice={product.real_price}
                onClick={() => navigate(`/products/${product.id}`)}
              />
            ))}

           
              


          </Grid>
        </div>
        <BestProducts className='mt-20' />
      </Grid>
    </section>
  )
}

export default Shop