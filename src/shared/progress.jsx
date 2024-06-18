import React from 'react'
import Flex from '../components/Flex'
import { StarIcon } from '../assets/content'

function Progress() {
    return (
        <div>
            <h3 className='text-2xl text-black font-bold'>Calidad</h3>
            <Flex className='flex justify-center items-center gap-4'>
                <div className='relative'>
                    <p className='text-8xl font-bold text-black '>4.8</p>
                    <p className='font-bold absolute text-lg bottom-1 -right-4'>/5</p>
                </div>
                <div className='w-full ms-6 me-6'>
                    <div className='flex items-center'>
                        <StarIcon className='text-customYellow me-1' />
                        <p className='me-2 font-bold'>5</p>
                        <progress className="progress w-full" value="100" max="100"></progress>
                    </div>
                    <div className='flex items-center'>
                        <StarIcon className='text-customYellow me-1' />
                        <p className='me-2 font-bold'>4</p>
                        <progress className="progress w-full" value="70" max="100"></progress>
                    </div>
                    <div className='flex items-center'>
                        <StarIcon className='text-customYellow me-1' />
                        <p className='me-2 font-bold'>3</p>
                        <progress className="progress w-full" value="40" max="100"></progress>
                    </div>
                    <div className='flex items-center'>
                        <StarIcon className='text-customYellow me-1' />
                        <p className='me-2 font-bold'>2</p>
                        <progress className="progress w-full" value="20" max="100"></progress>
                    </div>
                    <div className='flex items-center'>
                        <StarIcon className='text-customYellow me-1' />
                        <p className='me-2 font-bold'>1</p>
                        <progress className="progress w-full" value="0" max="100"></progress>
                    </div>

                </div>

            </Flex>
            <p className='col-span-10 text-black'>50 Reseñas</p>
        </div>
    )
}

export default Progress