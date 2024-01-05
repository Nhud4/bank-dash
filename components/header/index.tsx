'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Search from '../input/search'
import SettingIcon from '@/public/assets/icons/settings.svg'
import NotificationIcon from '@/public/assets/icons/notification.svg'
import Profile from '@/public/assets/images/udin.png'
import Image from 'next/image'

export default function Header() {
  const pathname = usePathname()
  const pageTitle = pathname.split('/')[1]
  return (
    <div className='flex justify-between items-center w-full bg-white p-3'>
      <h1 className='text-[28px] font-semibold text-[#343C6A] capitalize'>
        {pageTitle ? pageTitle : 'Dashboard'}
      </h1>
      <div className='flex items-center space-x-4'>
        <Search />
        <div className='w-[50px] h-[50px] bg-[#F5F7FA] rounded-full flex justify-center items-center'>
          <Image src={SettingIcon} alt='setting' />
        </div>
        <div className='w-[50px] h-[50px] bg-[#F5F7FA] rounded-full flex justify-center items-center'>
          <Image src={NotificationIcon} alt='notification' />
        </div>
        <div>
          <Image src={Profile} alt='profile' width={50} height={50} />
        </div>
      </div>
    </div>
  )
}
