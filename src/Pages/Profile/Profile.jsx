import Flex from '../../components/Flex'
import FormProfile from './formProfile'
import BackPage from '../../shared/backPage'

function Profile() {



    return (
        <section className='w-full mx-auto flex justify-center'>
            <Flex className='mt-28 lg:w-[80%] w-[94%] gap:2 lg:gap-4 '>
                <div className='grow'>
                    <div className=''>
                        <div>
                            <BackPage className='ps-2'/>
                            <h2 className='font-bold text-2xl lg:w-[80%] w-[94%] mx-auto'>Perfil</h2>
                            <FormProfile classNameDiv='lg:w-[80%] w-[94%] mx-auto' />
                        </div>

                    </div>

                </div>

            </Flex>
        </section>
    )
}

export default Profile