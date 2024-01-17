'use client'

import React from 'react'
import BalanceIcon from '@/public/assets/icons/money-tag.svg'
import IncomeIcon from '@/public/assets/icons/loan-3.svg'
import ExpenseIcon from '@/public/assets/icons/medical.svg'
import SavingIcon from '@/public/assets/icons/saving.svg'
import GeneralCard from '@/components/cards/generalCard'

export default function Page() {
  return (
    <div>
      <div className='grid grid-cols-4 gap-4'>
        <GeneralCard
          src={BalanceIcon}
          title='My Balance'
          value='$12,750'
          color='#FFF5D9'
          type='normal'
        />
        <GeneralCard src={IncomeIcon} title='Income' value='$5,600' color='#E7EDFF' type='normal' />
        <GeneralCard
          src={ExpenseIcon}
          title='Expense'
          value='$3,460'
          color='#FFE0EB'
          type='normal'
        />
        <GeneralCard
          src={SavingIcon}
          title='Total Saving'
          value='$7,920'
          color='#DCFAF8'
          type='normal'
        />
      </div>
    </div>
  )
}
