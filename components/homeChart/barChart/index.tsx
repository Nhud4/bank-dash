'use client'

import React from 'react'
import BarChart from '@/elements/chart/barChart'

export default function HomeBarChart() {
  return (
    <div className='bg-white p-4 rounded-2xl'>
      <div className='flex justify-end items-center space-x-4'>
        <div className='flex items-center space-x-2'>
          <div className='bg-[#16DBCC] w-4 h-4 rounded-full' />
          <h1>Diposit</h1>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='bg-[#1814F3] w-4 h-4 rounded-full' />
          <h1>Withdraw</h1>
        </div>
      </div>
      <BarChart />
    </div>
  )
}
