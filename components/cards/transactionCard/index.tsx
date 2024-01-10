'use client'

import React from 'react'
import CreditIcon from '@/public/assets/icons/credit.svg'
import PayPalIcon from '@/public/assets/icons/paypal.svg'
import DollarIcon from '@/public/assets/icons/dolar.svg'
import Image from 'next/image'

const TransactionCard = () => {
  return (
    <div className='rounded-2xl w-full bg-white p-4 space-y-2'>
      <div className='flex items-center space-x-2'>
        <div>
          <Image src={CreditIcon} alt='credit' />
        </div>
        <div className='flex justify-between items-center w-full'>
          <div>
            <h1>Deposit from my Card</h1>
            <p>28 January 2021</p>
          </div>
          <h2>-$850</h2>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <div>
          <Image src={PayPalIcon} alt='credit' />
        </div>
        <div className='flex justify-between items-center w-full'>
          <div>
            <h1>Deposit Paypal</h1>
            <p>25 January 2021</p>
          </div>
          <h2>+$2,500</h2>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <div>
          <Image src={DollarIcon} alt='credit' />
        </div>
        <div className='flex justify-between items-center w-full'>
          <div>
            <h1>Jemi Wilson</h1>
            <p>21 January 2021</p>
          </div>
          <h2>+$5,400</h2>
        </div>
      </div>
    </div>
  )
}

export default TransactionCard
