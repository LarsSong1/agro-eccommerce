import React from 'react'
import { Link } from 'react-router-dom'
import BtnShop from './btnShop'
import { CartIcon, ExitIcon, ProfileIcon } from '../assets/content'
import { logout } from '../services/supabase/Auth'

function Menu({ text, url, span, className }) {

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
                    <Link onClick={() => logout()}>
                        <ExitIcon />
                        Salir
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Menu