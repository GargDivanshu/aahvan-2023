import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about'
import Events from './events'
import {useRouter} from 'next/router'
import Contact from './contact';

export default function Home() {

  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black overflow-hidden'>
        <div className='w-full h-screen flex flex-col opacity-80 bg-black text-white items-center justify-center bg-hero bg-cover'>
          <div className='flex flex-col items-end justify-center relative'>
            <img src='/static/images/main-rect.png' className='absolute left-[-37vw] h-[900px]' />
            <h1 className='stencil text-8xl font-bold text-white '> AAHVAAN </h1>
            <img src='/static/images/main-rect.png' className='absolute right-[-35vw] h-[900px] rotate-180' />
            <h2 className='font-inter text-2xl text-[#FFB024] font-medium'> DTU&apos;s Annual Sports Fest </h2>
          </div>
          <div className='flex flex-col'>
            <h2 className='px-8'>
              6th - 8th April 2023
            </h2>
            <button 
            onClick={() => {router.push('auth/signin')}}
            className="bg-[#FFB024] md:mt-[23px] hover:text-[#FFB024] hover:bg-transparent border-2 border-[#FFB024] text-black m-3 px-4 py-2 text-4xl font-bold stencil rounded-md transform duration-200 ">
              Register
            </button>
          </div>
        </div>
      </main>
      <About />
      <Events />
      <Contact/>
    </div>
  )
}
