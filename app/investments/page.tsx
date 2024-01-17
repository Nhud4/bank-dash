'use client'

import React from 'react'
import AmountIcon from '@/public/assets/icons/money-bag.svg'
import InvestmentIcon from '@/public/assets/icons/pie-chart-1.svg'
import ReturnIcon from '@/public/assets/icons/repeat.svg'
import GeneralCard from '@/components/cards/generalCard'

export default function Page() {
  return (
    <div>
      <div className='grid grid-cols-3 gap-4'>
        <GeneralCard
          src={AmountIcon}
          title='Total Invested Amount'
          value='$150,000'
          color='#DCFAF8'
          type='normal'
        />
        <GeneralCard
          src={InvestmentIcon}
          title='Number of Investments'
          value='1,250'
          color='#FFE0EB'
          type='normal'
        />
        <GeneralCard
          src={ReturnIcon}
          title='Rate of Return'
          value='+5.80%'
          color='#E7EDFF'
          type='normal'
        />
      </div>
    </div>
  )
}
