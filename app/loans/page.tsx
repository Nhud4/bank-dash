'use client'

import React from 'react'
import GeneralCard from '@/components/cards/generalCard'
import UserIcon from '@/public/assets/icons/user-1.svg'
import BagIcon from '@/public/assets/icons/briefcase.svg'
import ChartIcon from '@/public/assets/icons/graph.svg'
import SupportIcon from '@/public/assets/icons/support.svg'

export default function Page() {
  return (
    <>
      <div className='grid grid-cols-4 gap-4'>
        <GeneralCard
          src={UserIcon}
          title='Personal Loans'
          value='$50,000'
          color='#E7EDFF'
          type='normal'
        />
        <GeneralCard
          src={BagIcon}
          title='Corporate Loans'
          value='$100,000'
          color='#FFF5D9'
          type='normal'
        />
        <GeneralCard
          src={ChartIcon}
          title='Business Loans'
          value='$500,000'
          color='#FFE0EB'
          type='normal'
        />
        <GeneralCard
          src={SupportIcon}
          title='Custom Loans'
          value='Choose Money'
          color='#DCFAF8'
          type='normal'
        />
      </div>
      <div className='mt-4'>
        <h1 className='text-[22px] font-semibold text-[#333B69]'>Active Loans Overview</h1>
      </div>
    </>
  )
}
