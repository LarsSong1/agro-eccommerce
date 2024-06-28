import React, { useState, useContext, useEffect } from 'react'
import Grid from '../../components/Grid'
import Flex from '../../components/Flex'
import { CarTransportIcon, ProfileIcon } from '../../assets/content'
import BtnCustomized from '../../shared/btnCustomized'
import Input from '../../shared/Input'
import ProfileContext from '../../context/ProfileContext'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [fullname, setFullname] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [province, setProvince] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [deliveryOption, setDeliveryOption] = useState(null)

    const navigate = useNavigate()
    const { profileData, updateProfile } = useContext(ProfileContext)

    const data = {
        address: address,
        city: city,
        username: username,
        full_name: fullname,
        country: country,
        province: province,
        postal_code: postalCode,
        phone: phone,
        delivery_option: deliveryOption
    }

    const submitChanges = async (e) => {
        e.preventDefault();
        const success = updateProfile(data)
        if (success) {
            // Actualizar el estado del componente con los datos actualizados
            setUsername(data.username);
            setPhone(data.phone);
            setFullname(data.full_name);
            setAddress(data.address);
            setCity(data.city);
            setCountry(data.country);
            setProvince(data.province);
            setPostalCode(data.postal_code);
            setDeliveryOption(data.delivery_option);
        }
    }


    useEffect(() => {
        if (profileData) {
          setUsername(profileData.username || '');
          setPhone(profileData.phone || '');
          setFullname(profileData.full_name || '');
          setAddress(profileData.address || '');
          setCity(profileData.city || '');
          setCountry(profileData.country || '');
          setProvince(profileData.province || '');
          setPostalCode(profileData.postal_code || '');
          setDeliveryOption(profileData.delivery_option || 'casa');
        }
      }, [profileData]);


    return (
        <section className='w-full mx-auto flex justify-center'>
            <Flex className='mt-28 lg:w-[80%] w-[94%] gap:2 lg:gap-4 '>
                <div className='grow'>
                    <div className=''>
                        <div>
                            <h2 className='font-bold text-2xl'>Perfil</h2>
                        </div>
                        <div className='w-full mt-6'>
                            <Flex className='flex gap-4'>
                                <Input label='Usuario' inputValue={username} type='text' placeholder='Damaris Dayanara' className='grow' onChange={(e) => setUsername(e.target.value)} />
                                <Input label='Num. Celular' inputValue={phone} type='text' placeholder='+593' value={'+593'} className='grow' onChange={(e) => setPhone(e.target.value)} />
                            </Flex>
                            <Flex className='flex gap-4'>
                                <Input label='Nombres' inputValue={fullname} type='text' placeholder='Damaris Dayanara' className='grow' onChange={(e) => setFullname(e.target.value)} />

                            </Flex>
                            <div className='mt-2'>
                                <Input label='Dirección' inputValue={address} type='text' placeholder='Naranjal idk' onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <Flex className='flex gap-4 mt-2'>
                                <Input label='Ciudad' inputValue={city} type='text' placeholder='Guayaquil' className='grow' onChange={(e) => setCity(e.target.value)} />
                                <Input label='País' inputValue={country} type='text' placeholder='Ecuador' className='grow' onChange={(e) => setCountry(e.target.value)} />
                            </Flex>
                            <div className='mt-2'>
                                <Input label='Provincia' inputValue={province} type='text' placeholder='Provincia' onChange={(e) => setProvince(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <Input label='Código Postal' inputValue={postalCode} type='text' placeholder='12415' onChange={(e) => setPostalCode(e.target.value)} />
                            </div>
                            <div className='mt-4'>
                                <h5 className='font-bold text-sm'>Horario de entrega</h5>
                                <Flex className='flex justify-center gap-20 flex-wrap mt-4'>
                                    <Flex className='flex'>
                                        <input type="radio" name="radio-1" className="radio" checked onChange={(e) => setDeliveryOption(e.target.value)} />
                                        <p className='ms-2 text-black'>En casa (todo el dia)</p>
                                    </Flex>
                                    <Flex className='flex'>
                                        <input type="radio" name="radio-1" className="radio" onChange={(e) => setDeliveryOption(e.target.value)} />
                                        <p className='ms-2 text-black'>Trabajo(Entregas 9 AM - 5 PM)</p>
                                    </Flex>
                                </Flex>

                            </div>
                            <div className='mt-10 inline-flex gap-4 w-full justify-end'>
                                <BtnCustomized text='Guardar' className='text-white bg-black w-[100px] rounded-xl flex justify-center cursor-pointer items-center pt-2 pb-2' onClick={submitChanges} />
                               
                            </div>
                        </div>
                    </div>

                </div>

            </Flex>
        </section>
    )
}

export default Profile