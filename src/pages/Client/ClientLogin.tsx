import dogcamp from '../../assets/dogcamp.png'
import PetLogo from '../../assets/PetLogo.png'
import { LoginForm } from '@/components/Client/LoginForm'


export function ClientLogin(){
    return(
        <div className='h-screen w-full flex'>
            <div className='h-full w-0 lg:w-[60%] flex justify-center items-start relative'>
                <h1 className='text-zinc-100 text-5xl z-10 pt-30'>Seu pet, nossa missão</h1>
                <img className='h-full w-full absolute inset-0 object-cover brightness-75' src={PetLogo} alt="Pet Logo" />
            </div>
            <div className='h-full w-full lg:w-[40%] flex flex-col bg-zinc-100'>
                <div className='h-50 w-full flex justify-center items-center'>
                    <img className='h-75' src={dogcamp}></img>
                </div>
                <div className='h-full w-full flex justify-center'>
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
    )
}