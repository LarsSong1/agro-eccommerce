import React from 'react'
import { AiOutlineShopping } from "react-icons/ai";

function BtnShop() {
    return (

        <>


            <a className="flex items-center h-8 pe-4 ps-4 rounded-md bg-customGray hover:bg-black hover:text-white me-6 cursor-pointer">
                <AiOutlineShopping />
                <p className='ms-2 text-sm'>5 Items</p>
            </a>
            <div className='h-8 w-[0.2px] opacity-50 bg-black me-4'></div>
        </>
    )
}

export default BtnShop