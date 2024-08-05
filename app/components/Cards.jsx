import React from 'react'
import Cardl from './Cardl'
import Cardr from './Cardr'

const Cards = () => {
  return (
    <div className='container'>
      <div className='cardsWrapper mt-[300px]'>
      <ul className='flex items-center justify-between max-w-[900px]'>
        <li>All</li>
        <li>UI Design</li>
        <li>UX Design</li>
        <li>Product Design</li>
        <li>Articles</li>
        <li>Tutorials</li>
        <li>News</li>
      </ul>
      <div className='flex gap-[20px] mt-[125px]'>
        <div className='flex flex-col gap-[75px]'>
          <Cardl />
          <Cardl />
          <Cardl />
        </div>
        <div className='flex flex-col gap-[75px]'>
            <Cardr />
            <Cardr />
            <Cardr />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cards
