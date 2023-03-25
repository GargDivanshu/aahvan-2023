import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[#996A16] text-center h-full">
            <div className="flex flex-col pl-12 pt-12 w-[55vw] mx-auto">
                <p className="stencil text-4xl uppercase text-[white] pb-8 font-bold">Contact Us</p>
                <div className="font-inter text-md font-semibold pb-20 text-white"> 
                <span className='flex flex-col items-start border-b-2 border-[#ffffff29] pb-2'>
                  <span class="my-4 stencil text-2xl text-black ">Aditya </span> <span className='flex flex-col items-start'><p>90575 41946</p> <p>ady1812sha@gmail.com</p></span>
                </span>
                <span className='flex flex-col items-end'>
                  <span class="my-4 stencil text-2xl text-black ">Deepak </span> <span className='flex flex-col items-end'><p>82399 84913</p> <p>deepak.cse.dtu@gmail.com</p></span>
                </span>
                </div>
                   
            </div>
         

        </div>
  )
}

export default Contact