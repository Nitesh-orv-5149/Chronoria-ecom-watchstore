import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='lg:text-[3rem] md:text-[2rem] sm:text-[2rem] text-[2rem] absolute flex justify-between items-start w-full h-20 p-[1.5rem] '>
        <Link to={'/contact'} className='hover:text-[var(--sec)]' >Contact</Link>
        <Link to={'/faqs'} className='hover:text-[var(--sec)]'>faq's</Link>
      </div>
    </>
  )
}

export default Footer