import React from 'react'
import Grid from '../../components/Grid'

function Shop() {
  return (
    <Grid className='col-span-10 grid grid-cols-10 mt-20'>
        <div className='col-span-2 '>
            <h2>Filtrar Productos</h2>
            <p>Categorias</p>
        </div>
        <div className='col-span-8'>
            productos
        </div>
    </Grid>
  )
}

export default Shop