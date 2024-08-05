import { IoIosArrowDown } from "react-icons/io"; 
import React from 'react'


const Nav = () => {
  return (
    <div className='container'>
      <nav className='flex justify-between items-center py-8'>
        <div className='flex items-center gap-3'>
            <img className='w-[220px]' src="/logo.png" alt="" />
            <img className='w-[90px] h-[24px]' src="/linkedin.png" alt="" />
        </div>

        <div>
            <ul className='flex gap-8'>
                <li className="flex items-center gap-1">EN<IoIosArrowDown /></li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
                <li>CV</li>
                <li>STORE</li>
                <li>FREELANCE</li>
                <li>ABOUT ME</li>
                <li>CONTACT</li>

            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
