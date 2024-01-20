'use client'

import React from 'react'
import Image from 'next/image'
import Image02 from '@/public/assets/images/image02.jpg'
import Image03 from '@/public/assets/images/image03.jpeg'
import Image04 from '@/public/assets/images/image04.jpg'
import SendIcon from '@/public/assets/icons/send.svg'

import styles from './style.module.css'

export default function TransferCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.all}>
        <h1>See All</h1>
      </div>
      <div className={styles.wrapperMenu}>
        <div className={styles.menu}>
          <Image src={Image02} alt='image02' width={70} height={70} className='rounded-full' />
          <h1>Livia Bator</h1>
          <h2>CEO</h2>
        </div>
        <div className={styles.menu}>
          <Image src={Image03} alt='image03' width={70} height={70} className='rounded-full' />
          <h3>Rany Parker</h3>
          <p>Director</p>
        </div>
        <div className={styles.menu}>
          <Image src={Image04} alt='image04' width={70} height={70} className='rounded-full' />
          <h3>Marry Jane</h3>
          <p>Designer</p>
        </div>
      </div>
      <div className='flex justify-between items-center mt-8'>
        <p className='text-base text-[#718EBF]'>Write Amount</p>
        <div className='flex justify-between items-center bg-[#EDF1F7] rounded-full pl-4'>
          <h3 className='text-base text-[#718EBF]'>525.50</h3>
          <div className='flex justify-center items-center bg-[#1814F3] rounded-full w-[60%] px-4 py-3 space-x-2 ml-4'>
            <h2 className='text-white'>Send</h2>
            <Image src={SendIcon} alt='send-icon' width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
