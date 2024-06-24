import React from 'react'
import { dataContact } from './contactData'


function Contact() {
    return (
        <section>
            <div class="mt-20 lg:mt-36">
                <div class="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-black font-[sans-serif]">
                    <div>
                        <h1 class="text-3xl font-extrabold">{dataContact.title}</h1>
                        <p class="text-sm text-gray-600 mt-3 ">{dataContact.callToAction}</p>
                        <div class="mt-12">
                            <h2 class="text-lg font-extrabold">Correo</h2>
                            <ul class="mt-3">
                                <li class="flex items-center">
                                    <div class="bg-custom h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                            viewBox="0 0 479.058 479.058">
                                            <path
                                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                data-original="#000000" />
                                        </svg>
                                    </div>
                                    <a target="blank" href="https://veilmail.io/e/FkKh7o" class="text-customBlue text-sm ml-3">
                                        <small class="block">Correo electrónico</small>
                                        <strong>{dataContact.email}</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-12">
                            <h2 class="text-lg font-extrabold">Socials</h2>
                            <ul class="flex mt-3 space-x-4">
                                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="https://www.facebook.com/guidoz1968" target='_blank'>

                                       <img className='w-8' src={dataContact.facebookIcon} alt="facebook Logo" />
                                    </a>
                                </li>
                            
                                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href={`https://wa.me/${dataContact.whatsappNumber}?text=${dataContact.whatsappText}`} target='_blank'>
                                    <img className='w-8' src={dataContact.whatsappIcon} alt="facebook Logo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form action="https://fabform.io/f/xxxxx" method="post" class="ml-auo space-y-4">
                        <input type='text' name="name" placeholder='Nombre'
                            className="w-full rounded-md py-2.5 px-4 border text-sm border-gray-600" />
                        <input type='email'
                            name='email'
                            placeholder='Correo Electrónico'
                            className="w-full rounded-md py-2.5 px-4 border text-sm border-gray-600" />
                        <input type='text' placeholder='Asunto'
                            name='subject' class="w-full rounded-md py-2.5 px-4 border text-sm border-gray-600" />
                        <textarea placeholder='Mensaje' rows="6"
                            name='message'
                            className="w-full rounded-md px-4 border text-sm pt-2.5 border-gray-600"></textarea>
                        <button type='button'
                            className="text-white bg-black hover:bg-white hover:text-black font-semibold rounded-md text-sm px-4 py-2.5 w-full border-2 border-black">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact