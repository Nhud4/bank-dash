'use client'

import React from 'react'
import CreditIcon from '@/public/assets/icons/credit.svg'
import PayPalIcon from '@/public/assets/icons/paypal.svg'
import DollarIcon from '@/public/assets/icons/dolar.svg'
import Image from 'next/image'
import styles from './style.module.css'

const TransactionCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContent}>
        <div className='bg-[#FFF5D9] p-2 rounded-full'>
          <Image src={CreditIcon} alt='credit' />
        </div>
        <div className={styles.content}>
          <div>
            <h1>Deposit from my Card</h1>
            <p>28 January 2021</p>
          </div>
          <h2 className='text-[#FF4B4A]'>-$850</h2>
        </div>
      </div>
      <div className={styles.wrapperContent}>
        <div className='bg-[#E7EDFF] p-2 rounded-full'>
          <Image src={PayPalIcon} alt='credit' />
        </div>
        <div className={styles.content}>
          <div>
            <h1>Deposit Paypal</h1>
            <p>25 January 2021</p>
          </div>
          <h2 className='text-[#41D4A8]'>+$2,500</h2>
        </div>
      </div>
      <div className={styles.wrapperContent}>
        <div className='bg-[#DCFAF8] p-2 rounded-full'>
          <Image src={DollarIcon} alt='credit' />
        </div>
        <div className={styles.content}>
          <div>
            <h1>Jemi Wilson</h1>
            <p>21 January 2021</p>
          </div>
          <h2 className='text-[#41D4A8]'>+$5,400</h2>
        </div>
      </div>
    </div>
  )
}

export default TransactionCard
