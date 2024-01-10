'use client'

import React from 'react'
import Chip from '@/public/assets/images/chip.png'
import Bank from '@/public/assets/icons/bank1.svg'
import Image from 'next/image'
import styles from './style.module.css'

export const BlueCreditCard = () => {
  return (
    <div className={styles.wrapperBlue}>
      <div className={styles.topContent}>
        <div className='col-span-2'>
          <p className='!opacity-100'>Balance</p>
          <h1>$5,756</h1>
        </div>
        <div className='col-start-3 justify-self-end'>
          <Image src={Chip} alt='chip' width={35} height={35} />
        </div>
        <div className='col-span-2'>
          <p>CARD HOLDER</p>
          <h2>Eddy Cusuma</h2>
        </div>
        <div className='justify-self-end'>
          <p>VALID THRU</p>
          <h2>12/22</h2>
        </div>
      </div>
      <div className={styles.wrapperBottomBlue}>
        <h1>3778 **** **** 1234</h1>
        <Image src={Bank} alt='bank' />
      </div>
    </div>
  )
}
