'use client'

import React from 'react'
import CreditCard from '@/components/cards/creditCard'
import TransactionCard from '@/components/cards/transactionCard'
import HomeBarChart from '@/components/homeChart/barChart'
import HomePieChart from '@/components/homeChart/pieChart'
import HomeLineChart from '@/components/homeChart/lineChart'
import TransferCard from '@/components/cards/trsnferCard'

export default function Home() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <h1 className='text-xl font-semibold text-[#343C6A]'>My Cards</h1>
      <h1 className='text-base font-semibold text-[#343C6A] justify-self-end place-self-center'>
        See All
      </h1>
      <h1 className='text-xl font-semibold text-[#343C6A]'>Recent Transaction</h1>
      <CreditCard type='blue' />
      <CreditCard type='white' />
      <TransactionCard />
      <h1 className='text-xl font-semibold text-[#343C6A] col-span-2'>Weekly Activity</h1>
      <h1 className='text-xl font-semibold text-[#343C6A]'>Expense Statistics</h1>
      <div className='col-span-2'>
        <HomeBarChart />
      </div>
      <div>
        <HomePieChart />
      </div>
      <h1 className='text-xl font-semibold text-[#343C6A]'>Quick Transfer</h1>
      <h1 className='text-xl font-semibold text-[#343C6A] col-span-2'>Balance History</h1>
      <TransferCard />
      <div className='col-span-2'>
        <HomeLineChart />
      </div>
    </div>
  )
}
