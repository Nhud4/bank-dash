'use client'

import React from 'react'
import Image from 'next/image'
import LoadingImage from '@/public/assets/images/loading.webp'

export default function Loading() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image src={LoadingImage} alt='image' />
      <h1 className='text-xl font-semibold'>Wait a moment ...</h1>
    </div>
  )
}
