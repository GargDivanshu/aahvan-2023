import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about'
import Events from './events'
import {AiOutlineTeam} from 'react-icons/ai'
import { useRouter } from 'next/router'
import Contact from './contact';

export default function Home() {

  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Aahvan - 2023</title>
        <meta name="description" content="The Inter College Sports Fest of Delhi Technological University" />
        <link rel="icon" href="/aahvan-fav.ico" />
      </Head>
      <div className="my-auto min-h-fit bg-black overflow-hidden">
        <button
        onClick={() => { router.push('/team') }}
         className='flex mx-2 my-3 bg-[#FFB124] border-2 border-[#FFB124] text-black px-4 py-1 rounded-md font-inter font-semibold hover:bg-transparent hover:text-[#FFB124] transition duration-200 ease-in-out'>
        <AiOutlineTeam
        className="mx-1"
          fontSize={25}
        />
        Our Team</button>
      </div>
      <main className='bg-black overflow-hidden'>
      
        <div className='w-full h-screen flex flex-col opacity-80 bg-black text-white items-center justify-center bg-hero bg-cover'>
          <div className='flex flex-col justify-center relative'>
            <img src='/static/images/main-rect.png' className='absolute left-[-37vw] h-[900px] hidden sm:block' />
            <h1 className='stencil text-6xl lg:text-8xl font-bold text-white '> AAHVAAN </h1>
            <img src='/static/images/main-rect.png' className='absolute right-[-35vw] h-[900px] rotate-180 hidden sm:block' />
            <h2 className='font-inter text-center text-2xl text-[#FFB024] font-medium'> DTU&apos;s Annual Sports Fest </h2>
          </div>
          <div className='flex flex-col'>
            <h2 className='px-8'>
              6th - 8th April 2023
            </h2>
            <button
              onClick={() => { router.push('auth/signin') }}
              className="bg-[#FFB024] md:mt-[23px] hover:text-[#FFB024] hover:bg-white text-black m-3 px-3 py-2 text-4xl font-bold stencil rounded-md">
              Register
            </button>
          </div>
        </div>
      </main>
      <About />
      <Events />
      <Contact />
    </div>
  )
}
