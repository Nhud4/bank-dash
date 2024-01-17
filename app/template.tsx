import React from 'react'
import NavigationMenu from '@/components/menu'
import Header from '@/components/header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavigationMenu />
      <div className='ml-[17rem] flex-1 px-0'>
        <Header />
        <div className='px-5 pb-4 pt-24'>{children}</div>
      </div>
    </div>
  )
}
