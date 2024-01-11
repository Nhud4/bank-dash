import React from 'react'
import NavigationMenu from '@/components/menu'
import Header from '@/components/header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-6'>
      <NavigationMenu />
      <div className='col-span-5 w-full'>
        <Header />
        <div className='px-5 py-4'>{children}</div>
      </div>
    </div>
  )
}
