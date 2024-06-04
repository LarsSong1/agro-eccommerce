import React, { useContext } from 'react'
import agrozamLogo from '../../assets/images/agrozamLogo.svg'
import { CiSearch } from "react-icons/ci";
import Avatar from '../../shared/avatar';
import AuthContext from '../../context/AutContext';
import BtnShop from '../../shared/btnShop';

function Navbar() {
    const { user } = useContext(AuthContext)
    console.log(user)
    let username = ''
    let imgProfile = ''
    if (user) {
        username = user.full_name.split(' ')[0]
        imgProfile = user.avatar_url
        console.log(user.avatar_url)
    }


    





    return (
        <>
            <div className="navbar bg-base-100">

                <div className="navbar-start">
                    <a className=" text-xl">
                        <img className='w-16 h-16' src={agrozamLogo} alt="logo" />
                    </a>
                    <label className="input input-bordered border-opacity-25   border-black flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Buscar Producto" />
                        <CiSearch />

                    </label>
                </div>
                <div className="navbar-center">
                    <a href="">Productos</a>
                </div>
                <div className='navbar-end'>
                    {
                        user ? (
                            <>

                                <BtnShop />
                               
                                <Avatar classDiv='rounded-full w-10' imgSrc={imgProfile} />
                                <p className='ms-2'>{username}</p>

                            </>

                        ) : (
                            <div></div>
                        )
                    }
                </div>

            </div>

        </>
    )
}

export default Navbar