import React from 'react'
import { Link } from 'react-router-dom'
import BtnShop from './btnShop'
import { ProfileIcon } from '../assets/content'

function Menu({ text, url, span, className }) {

    return (
        <ul id='menuProfile' className={`menu bg-base-300 rounded-box ${className}`}>
            <li>
                <Link to={url}>
                    <ProfileIcon />
                    {text}
                    <span className="badge badge-sm">{span}</span>
                </Link>

            </li>
            <li>
                <BtnShop/>
            </li>
        </ul>
    )
}

export default Menu