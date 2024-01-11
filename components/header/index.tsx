'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Search from '../input/search'
import SettingIcon from '@/public/assets/icons/settings.svg'
import NotificationIcon from '@/public/assets/icons/notification.svg'
import Profile2 from '@/public/assets/images/image01.jpg'
import Image from 'next/image'
import styles from './style.module.css'

export default function Header() {
  const pathname = usePathname()
  const pageTitle = pathname.split('/')[1]
  return (
    <div className={styles.wrapper}>
      <h1>{pageTitle ? pageTitle : 'Dashboard'}</h1>
      <div className={styles.wrapperRight}>
        <Search />
        <div className={styles.icon}>
          <Image src={SettingIcon} alt='setting' />
        </div>
        <div className={styles.icon}>
          <Image src={NotificationIcon} alt='notification' />
        </div>
        <div>
          <Image src={Profile2} alt='profile' width={50} height={50} className='rounded-full' />
        </div>
      </div>
    </div>
  )
}
