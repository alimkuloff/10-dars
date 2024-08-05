import { BsMedium } from "react-icons/bs"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between mt-[80px]">
      <div>
        <h1 className="text-[52px] text-[#D05270] font-bold">Blog Posts</h1>
        <h2 className="text-[52px] text-[#424242] font-medium">I think so, this is it. </h2>
        <p className="text-[#424242] text-[18px] font-normal max-w-[630px]">Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
        <div className="links flex gap-5 mt-9">
            <a className="bg-[#47ACDF]" href=" https://twitter.com"><AiOutlineTwitter /> TWITTER</a>
            <a className="bg-[#1275B1]" href=" https://linkedin.com"><AiFillLinkedin /> LINKEDIN</a>
            <a className="bg-[#000000]" href=" https://medium.com"><BsMedium /> MEDIUM</a>
        </div>
      </div>
      <img className="w-[408px]" src="/header.png" alt="" />
    </div>
  )
}

export default Header
