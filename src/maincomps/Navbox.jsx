import React from 'react'
import './NAvbox.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbox = () => {

  const containerVariants = {
    hidden: (direction) => ({ scale: 0, 
                              x: direction * -100 }),
    visible: (direction) => ({
                              scale: [0, 1, 1, 1, 1],
                              x: [direction * -100, direction * -100, direction * -100, 0, 0], 
                              transition: { duration: 2, ease: "easeInOut" },
    }),
  };


  return (
    <div id='text'  className="lg:text-[3rem] md:text-[2rem] sm:text-[2rem] text-[1.4rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:gap-4 md:gap-0 text-black text-center mt-[5rem] lg:w-[40rem] md:w-[35rem] sm:w-[30rem] w-[20rem] lg:h-[25rem] md:h-[20rem] sm:h-[20rem] h-[18rem] place-items-center">
        <Link to={'/categories'}><motion.button variants={containerVariants} initial='hidden' animate='visible' custom={1} className='ml-[3rem]'>CATEGORIES</motion.button></Link>
        <Link to={'/profile'}><motion.button variants={containerVariants} initial='hidden' animate='visible' custom={1} className='ml-[6rem]'>PROFILE</motion.button></Link>
        <Link to={'/cart'}><motion.button variants={containerVariants} initial='hidden' animate='visible' custom={1} className='ml-[3rem]'>CART</motion.button></Link>
        <Link className='col-span-3' to={'/shopnow'}><motion.button initial='hidden' animate={{
                                                                              scale: [0, 1, 1, 1, 1],
                                                                              transition: { duration: 2, ease: "easeInOut" }}}
         className='lg:w-[40rem] md:w-[33rem] sm:w-[28rem] w-[18rem] '>SHOP NOW</motion.button></Link>
        <Link to={'/services'}><motion.button variants={containerVariants} initial='hidden' animate='visible' custom={-1} className=''>SERVICES</motion.button></Link>
        <Link to={'/offers'}><motion.button variants={containerVariants} initial='hidden' animate='visible' custom={-1} className=''>OFFERS</motion.button></Link>
        <Link to={'/orders'}><motion.button variants={containerVariants} initial='hidden' animate='visible' custom={-1} className=''>ORDERS</motion.button></Link>
    </div>
    
  )
}

export default Navbox