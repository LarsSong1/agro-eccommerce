import React, { useContext, useState } from 'react'
import BtnImage from '../../../shared/btnImage'
import { logInWithGoogle, signIn, signUp } from '../../../services/supabase/Auth'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../../context/AutContext'
import BtnBlack from '../../../shared/btnBlack'
import { agrozamLogo, googleLogo } from '../../../assets/images/images'
import Input from '../../../shared/Input'
import { FiArrowUpRight } from "react-icons/fi";







function FormLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)


    const loginGoogle = async (e) => {
        e.preventDefault();
        await logInWithGoogle()

    }

    const loginWithEmail = async (e) => {
        e.preventDefault();
        await signIn({ email, password });



    }

    console.log(email, password)



    return (
        <>
            <form onSubmit={loginWithEmail} className="flex justify-center flex-col  w-full gap-2">
                <img className='w-24 h-24 mx-auto' src={agrozamLogo} alt="logo" />
                <h1 className="text-xl font-bold text-black text-center">Ingresa en Agrozam</h1>
                <BtnImage logo={googleLogo} text='Continua con Google' onClick={loginGoogle} />

                <div className='mb-2 mt-4 relative flex flex-col justify-center'>
                    <div className='bg-black h-[1.5px] opacity-10 relative'>
                    </div>
                    <p className='bg-white w-[30px] mx-auto relative top-[-12px] text-center'>o</p>
                </div>
                {/* <label className="input input-bordered flex items-center gap-2 w-[80%]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                  <input type="text" className="grow" placeholder="Correo" onChange={e => setEmail(e.target.value)} />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-[80%]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                  <input type="password" placeholder='Contraseña' className="grow" onChange={e => setPassword(e.target.value)} />
                </label> */}
                <Input label='Correo' type='text' placeholder='Correo Electrónico' onChange={e=>setEmail(e.target.value)}/>
                <Input label='Contraseña' type='password' placeholder='Ingresa tu contraseña' onChange={e=>setPassword(e.target.value)}/>

                <BtnBlack text={'Ingresar'} />

                <div className='flex mx-auto justify-center'>
                    <p className='text-sm opacity-75 me-2'>No tienes una cuenta?</p>
                    <Link to='/register' className='font-bold hover:scale-110 hover:font-bold text-sm flex items-center '>
                        Registrate
                        <FiArrowUpRight />

                    </Link>
                </div>

            </form>

        </>
    )
}

export default FormLogin