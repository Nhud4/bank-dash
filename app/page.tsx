'use client'

import React from 'react'
import CreditCard from '@/components/cards/creditCard'
import TransactionCard from '@/components/cards/transactionCard'

export default function Home() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <h1 className='text-[22px] font-semibold text-[#343C6A]'>My Cards</h1>
      <h1 className='text-[17px] font-semibold text-[#343C6A] justify-self-end place-self-center'>
        See All
      </h1>
      <h1 className='text-[22px] font-semibold text-[#343C6A]'>Recent Transaction</h1>
      <CreditCard type='blue' />
      <CreditCard type='white' />
      <TransactionCard />
    </div>
  )
}
