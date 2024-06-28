import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import BtnShop from './btnShop'
import { CartIcon, ExitIcon, ProfileIcon } from '../assets/content'
import { Logout } from '../services/supabase/Auth'
import DrawerContext from '../context/DrawerContext'

function Menu({ text, url, span, className }) {

    const { toggleCartDrawer } = useContext(DrawerContext)


    
    return (

        <div id='menuProfile' className={`menu rounded-box ${className}`}>
            <ul>

                <li>
                    <Link to='/profile'>
                        <ProfileIcon />
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <CartIcon />
                        Carrito
                    </Link>
                </li>
                <li>
                    <Link onClick={()=>Logout()}>
                        <ExitIcon />
                        Salir
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Menu