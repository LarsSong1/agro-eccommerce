import React, { useContext, useState } from 'react'
import BtnImage from '../../shared/btnImage'
import { logInWithGoogle, signIn } from '../../services/supabase/Auth'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AutContext'
import BtnBlack from '../../shared/btnBlack'
import Input from '../../shared/Input'
import { googleLogo, agrozamLogo, ArrowUpRight } from '../../assets/content'







function FormLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()



    const loginGoogle = async (e) => {
        e.preventDefault();
        await logInWithGoogle();

    }

   const loginWithEmail = async (e) => {
        e.preventDefault();
        const user = await signIn({ email, password });
        if (user){
            navigate('/');
        }

    }


  



    return (
        <>
            <form onSubmit={loginWithEmail} className="flex justify-center flex-col w-[100%] lg:w-[400px] gap-2">
                <img className='w-32 h-32 mx-auto' src={agrozamLogo} alt="logo" />
                <h1 className="text-xl font-bold text-black text-center">Ingresa en Agrozam</h1>
                <BtnImage logo={googleLogo} text='Continua con Google' onClick={loginGoogle} />

                <div className='mb-2 mt-4 relative flex flex-col justify-center'>
                    <div className='bg-black h-[1.5px] opacity-10 relative'>
                    </div>
                    <p className='bg-white w-[30px] mx-auto relative top-[-12px] text-center'>o</p>
                </div>
                <Input label='Correo' type='text' placeholder='Correo Electrónico' onChange={e=>setEmail(e.target.value)}/>
                <Input label='Contraseña' type='password' placeholder='Ingresa tu contraseña' onChange={e=>setPassword(e.target.value)}/>

                <BtnBlack text={'Ingresar'} onClick={loginWithEmail}/>

                <div className='flex mx-auto justify-center'>
                    <p className='text-sm opacity-75 me-2'>No tienes una cuenta?</p>
                    <Link to='/register' className='font-bold hover:scale-110 hover:font-bold text-sm flex items-center '>
                        Registrate
                        <ArrowUpRight/>
                    </Link>
                </div>

            </form>

        </>
    )
}

export default FormLogin