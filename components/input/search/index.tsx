'use client'

import React from 'react'
import SearchIcon from '@/public/assets/icons/search.svg'
import Image from 'next/image'

export default function Search() {
  return (
    <div className='flex items-center space-x-3 p-3 bg-[#F5F7FA] w-fit rounded-full'>
      <Image src={SearchIcon} alt='icon' />
      <input type='text' placeholder='Search for something' />
    </div>
  )
}
