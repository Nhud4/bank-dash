'use client'

import React from 'react'
import GeneralCard from '@/components/cards/generalCard'
import LifeIcon from '@/public/assets/icons/life-insurance filled.svg'
import BagIcon from '@/public/assets/icons/bag.svg'
import ShieldIcon from '@/public/assets/icons/shield.svg'

export default function Page() {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <GeneralCard
          src={LifeIcon}
          title='Life Insurance'
          value='Unlimited protection'
          color='#E7EDFF'
          type='flip'
        />
        <GeneralCard
          src={BagIcon}
          title='Shopping'
          value='Buy. Think. Grow.'
          color='#FFF5D9'
          type='flip'
        />
        <GeneralCard
          src={ShieldIcon}
          title='Safety'
          value='We are your allies'
          color='#DCFAF8'
          type='flip'
        />
      </div>
    </>
  )
}
