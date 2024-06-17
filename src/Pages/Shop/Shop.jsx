import React, { useState } from 'react'
import Grid from '../../components/Grid'
import Flex from '../../components/Flex'
import Badges from '../../shared/badges'
import InputSearch from '../../shared/inputSearch'
import Range from '../../shared/range'
import BtnIcon from '../../shared/btnIcon'
import { FilterIcon, FilterIcon2 } from '../../assets/content'
import ProductCard from '../../shared/productCard'
import BestProducts from '../../shared/BestProducts'

function Shop() {
  const [activeBadge, setActiveBadge] = useState('All')

  const categories = [
    'All',
    'Bioestimulantes',
    'Mejoras del Suelo',
    'Fertilizantes',
    'Nutrientes',
    'C. Plagas',
    'Promotores de Crecimiento',
    'Mejoras de Estructura',
  ];

  const handleFilter = (category) => {
    setActiveBadge(category)
    console.log(category)
  }


  return (
    <section className='w-full mt-28 mx-auto'>
      <Grid className='grid col-span-10 grid-cols-10 lg:w-[80%] mx-auto '>
        <Flex className='lg:col-span-2 col-span-10 lg:ps-0 lg:pe-0  pe-4 ps-4'>
          <div className=''>
            <h2 className='text-2xl text-start'>Filtrar Productos</h2>
            <p className='text-md'>Categorias</p>
          </div>
          <div className='mt-10'>
            <Flex className='flex flex-wrap items-center gap-2 w-full'>
              {categories.map((category) => (
                <Badges
                  key={category}
                  text={category}
                  active={activeBadge === category}
                  onClick={() => handleFilter(category)}
                />
              ))}
            </Flex>
            {/* <div>
              <Range/>
            </div> */}


          </div>
        </Flex>
        <div className='lg:col-span-8 col-span-10 ps-4 pe-4 lg:pe-0 lg:ps-6'>
          <Flex className='flex gap-2 flex-wrap'>
            <InputSearch className='grow mb-2' />
            <BtnIcon text='filtros' icon={<FilterIcon/>}/>
            <BtnIcon text='Más popular' icon={<FilterIcon2/>}/>
          </Flex>
          <Grid className='mt-10 gap-10 grid lg:grid-cols-3 grid-cols-1 place-items-center'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

          </Grid>
        </div>
        <BestProducts className='mt-20'/>
      </Grid>
    </section>
  )
}

export default Shop