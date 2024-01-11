'use client'

import React from 'react'
import CreditCard from '@/components/cards/creditCard'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        <h1 className='text-[22px] font-semibold text-[#343C6A]'>My Cards</h1>
        <Link href='#' className='text-[17px] font-semibold text-[#343C6A]'>
          + Add Card
        </Link>
        <h1 className='text-[22px] font-semibold text-[#343C6A]'>My Expense</h1>
        <CreditCard type='blue' />
        <CreditCard type='white' />
      </div>
    </div>
  )
}
