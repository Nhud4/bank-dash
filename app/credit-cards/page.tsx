'use client'

import React from 'react'
import CreditCard from '@/components/cards/creditCard'

export default function Page() {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        <h1 className='col-span-3 text-[22px] font-semibold text-[#333B69]'>My Cards</h1>
        <CreditCard type='blue' />
        <CreditCard type='blue' />
        <CreditCard type='white' />
      </div>
    </div>
  )
}
