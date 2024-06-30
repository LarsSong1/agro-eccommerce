import React from 'react'
import Flex from '../components/Flex'
import { useNavigate } from 'react-router-dom'
import { BackArrowIcon } from '../assets/content'

function BackPage({className}) {
    const navigate = useNavigate() 
    return (
        <div className={`w-full col-span-10 lg:p-0 ${className}`}>
            <Flex className='bg-customGray rounded-full w-[45px] flex justify-center'
                onClick={() => navigate(-1)}
            >
                <BackArrowIcon size={40} color='black' />
            </Flex>
        </div>
    )
}

export default BackPage