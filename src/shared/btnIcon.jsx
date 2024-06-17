import React from 'react'
import Flex from '../components/Flex'

function BtnIcon({text, icon}) {
  return (
    <Flex className='bg-customGray flex items-center justiffy-center p-2 rounded-xl gap-1 font-bold'>
        {icon}
        <p className='text-sm'>{text}</p>
    </Flex>
  )
}

export default BtnIcon