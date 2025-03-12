import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='lg:text-[3rem] md:text-[2rem] sm:text-[2rem] text-[1rem] absolute flex justify-between items-start w-full h-30 p-[1.5rem] '>
        <Link to={'/about'} className='hover:text-[var(--sec)]'>About</Link >
        <motion.h1 animate={{ opacity: [0, 0, 0, 0, 0, 0, 1] }} transition={{ duration: 3, ease: "easeInOut" }}  className='mt-[0rem] lg:text-[5rem] md:text-[5rem] sm:text-[3rem] text-[2rem]'>CHRONORIA</motion.h1>
        <Link to={'/terms'}  className='hover:text-[var(--sec)]'>T & C</Link >
      </div>
    </>
  )
}

export default Header