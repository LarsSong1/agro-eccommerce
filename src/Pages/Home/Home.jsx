import { useContext, useState } from 'react'
import AuthContext from '../../context/AutContext'
import { logout } from '../../services/supabase/Auth';





function Home() {

    const { user } = useContext(AuthContext)



    const logoutApp = async () => {
        await logout();

    };
    return (
        <div>
            {user ? (
                <>
                    {/* <p>Nombre: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <img src={user.avatar_url} alt="Avatar" /> */}
                    <button className='btn' onClick={logoutApp}>logout</button>




                </>
            ) : (
                <p>No hay usuario autenticado</p>
            )}



        </div>
    )
}

export default Home