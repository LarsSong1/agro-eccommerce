import React, { useRef } from 'react'
import { dataContact } from './contactData'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'



function Contact() {
    const form = useRef()



    const submitForm = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_o9zh89q', 'template_yxgfj36', form.current, {
            publicKey: 'jLhlh2Zrud6_MFhQr'
        })
            .then(
                () => {
                    toast.success('Correo enviado')
                }, 
                (error) => {
                    toast.error('Error al enviar el correo')
                }
            )


    }







    return (
        <section>
            <div className="mt-20 lg:mt-36">
                <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-black font-[sans-serif]">
                    <div>
                        <h1 className="text-3xl font-extrabold">{dataContact.title}</h1>
                        <p className="text-sm text-gray-600 mt-3 ">{dataContact.callToAction}</p>
                        <div className="mt-12">
                            <h2 className="text-lg font-extrabold">Correo</h2>
                            <ul className="mt-3">
                                <li className="flex items-center">
                                    <div className="bg-custom h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                            viewBox="0 0 479.058 479.058">
                                            <path
                                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                data-original="#000000" />
                                        </svg>
                                    </div>
                                    <a target="blank" href={`mailto:${dataContact.email}`} className="text-customBlue text-sm ml-3">
                                        <small className="block">Correo electrónico</small>
                                        <strong>{dataContact.email}</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-lg font-extrabold">Socials</h2>
                            <ul className="flex mt-3 space-x-4">
                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href={dataContact.facebook} target='_blank'>

                                        <img className='w-8' src={dataContact.facebookIcon} alt="facebook Logo" />
                                    </a>
                                </li>

                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href={`https://wa.me/${dataContact.whatsappNumber}?text=${dataContact.whatsappText}`} target='_blank'>
                                        <img className='w-8' src={dataContact.whatsappIcon} alt="facebook Logo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form ref={form} onSubmit={submitForm} className="ml-auo space-y-4">
                        <input type='text' name="name" placeholder='Nombre'
                            className="w-full rounded-md py-2.5 px-4 border text-sm border-gray-600" />
                        <input type='email'
                            name='email'
                            placeholder='Correo Electrónico'
                            className="w-full rounded-md py-2.5 px-4 border text-sm border-gray-600" />
                        <input type='text' placeholder='Asunto'
                            name='subject' className="w-full rounded-md py-2.5 px-4 border text-sm border-gray-600" />
                        <textarea placeholder='Mensaje' rows="6"
                            name='message'
                            className="w-full rounded-md px-4 border text-sm pt-2.5 border-gray-600"

                        ></textarea>
                        <button type='submit'
                            className="text-white bg-black hover:bg-white hover:text-black font-semibold rounded-md text-sm px-4 py-2.5 w-full border-2 border-black">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact