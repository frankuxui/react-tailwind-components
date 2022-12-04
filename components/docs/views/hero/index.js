import React from 'react'
import { ButtonStarted, ButtonGithub } from 'components/docs/components/button'
import Sections from 'components/docs/components/doc-section'

const Hero = () => {
  return (
    <>
      <div className='flex flex-col items-center mb-10'>
        <h1 className='text-3xl md:text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0076f4] to-[#1ce1ff]'>
          Development Tools
        </h1>
        <p className='mt-4 md:text-xl md:max-w-xl text-center'>
          Guía de vistas, componentes y pautas a seguir para el uso de buenas prácticas en el desarrollo.
        </p>
        <div className='flex items-center mt-6 space-x-2'>
          <ButtonStarted />
          <ButtonGithub />
        </div>
        <Sections />
      </div>
    </>
  )
}

export default Hero
