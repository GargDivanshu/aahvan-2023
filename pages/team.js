import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Team = () => {
  return (
    <div className='flex flex-col items-center justify-start min-h-screen h-full w-full bg-[#101010] text-white font-inter'>
        <span className='text-7xl pt-10 pb-5 stencil font-bold text-[#FFB024] h-full'>
            Team
        </span>
        <div className='h-full w-2/3 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4'>
        <span className='flex flex-col items-center border-2 rounded-lg py-2 border-[#ffffff29] pb-2'>
            <span class="my-1 stencil text-3xl font-semibold text-[#FFB024] ">Divanshu Garg</span> <span className='flex flex-col items-center'>
                <p className='pb-1'>Backend Developer</p>
                <span className='flex gap-2 items-center pb-2'>
                    <a href='https://www.linkedin.com/in/divanshu-garg-059406215/' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={20} />
                    </a>
                    <a href='https://github.com/GargDivanshu' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={20} />
                    </a>
                </span>
                </span>
        </span>
        <span className='flex flex-col items-center border-2 rounded-lg py-2 border-[#ffffff29] pb-2'>
            <span class="my-1 stencil text-3xl font-semibold text-[#FFB024] ">Gitansh Mehta</span> <span className='flex flex-col items-center'>
                <p className='pb-1'>Frontend Developer</p>
                <span className='flex gap-2 items-center'>
                    <a href='https://www.linkedin.com/in/gitansh-mehta' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={20} />
                    </a>
                    <a href='https://github.com/notsosimppole' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={20} />
                    </a>
                </span>
                </span>
        </span>
        <span className='flex flex-col items-center border-2 rounded-lg py-2 border-[#ffffff29] pb-2'>
            <span class="my-1 stencil text-3xl font-semibold text-[#FFB024] ">Ayush Karir</span> <span className='flex flex-col items-center'>
                <p className='pb-1'>Frontend Developer</p>
                <span className='flex gap-2 items-center'>
                    <a href='https://www.linkedin.com/in/ayushkarir/' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={20} />
                    </a>
                    <a href='https://github.com/AyushKarir' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={20} />
                    </a>
                </span>
                </span>
        </span>
        <span className='flex flex-col items-center border-2 rounded-lg py-2 border-[#ffffff29] pb-2'>
            <span class="my-1 stencil text-3xl font-semibold text-[#FFB024] ">Isha Aggarwal</span> <span className='flex flex-col items-center'>
                <p className='pb-1'>UX Designer</p>
                <span className='flex gap-2 items-center pb-2'>
                    <a href='https://www.linkedin.com/in/isha-aggarwal01/' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={20} />
                    </a>
                    <a href='https://www.instagram.com/isha.verse/?igshid=YmMyMTA2M2Y' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram size={20} />
                    </a>
                </span>
                </span>
        </span>
        <span className='flex flex-col items-center border-2 rounded-lg py-2 border-[#ffffff29] pb-2'>
            <span class="my-1 stencil text-3xl font-semibold text-[#FFB024] ">Deepak Mohnani</span>
            <span className='flex flex-col items-center'>
                <p className='pb-1'>Lead Developer</p>
                <span className='flex gap-2 items-center pb-2'>
                    <a href='https://www.linkedin.com/in/deepak-mohnani-a8843b191/' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={20} />
                    </a>
                    <a href='https://github.com/saymedgm' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={20} />
                    </a>
                </span>
            </span>
        </span>

        <span className='flex flex-col items-center border-2 rounded-lg py-2 border-[#ffffff29] pb-2'>
            <span class="my-1 stencil text-3xl font-semibold text-[#FFB024] ">Kartikeya Jain</span>
            <span className='flex flex-col items-center'>
                <p className='pb-1'>Lead Developer</p>
                <span className='flex gap-2 items-center pb-2'>
                    <a href='https://www.linkedin.com/in/kartikeya-jain-415765202' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={20} />
                    </a>
                    <a href='https://github.com/Kartikeya-Jain' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={20} />
                    </a>
                </span>
            </span>
        </span>


        <span className='flex flex-col items-center border-2 rounded-lg py-2 border-[#ffffff29] pb-2'>
            <span class="my-1 stencil text-3xl font-semibold text-[#FFB024] ">Aditya</span>
            <span className='flex flex-col items-center'>
                <p className='pb-1'>Lead Developer</p>
                <span className='flex gap-2 items-center pb-2'>
                    <a href='https://www.linkedin.com/in/aditya-sharma-406149202' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={20} />
                    </a>
                    <a href='https://github.com/ady1812sha' className='text-white hover:text-[#cecece] active:text-white visited:text-white visited:no-underline' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={20} />
                    </a>
                </span>
            </span>
        </span>
        </div>
    </div>
  )
}

export default Team