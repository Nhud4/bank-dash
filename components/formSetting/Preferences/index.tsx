'use client'

import React from 'react'
import Image from 'next/image'
import SwitchOn from '@/public/assets/icons/switchOn.svg'
import SwitchOff from '@/public/assets/icons/switchOff.svg'
import TextInput from '@/components/input/textInput'

export default function FormPreferences() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-y-4 gap-x-8 w-full'>
        <TextInput label='Currency' placeholder='Currency' value='USD' />
        <TextInput
          label='Time Zone'
          placeholder='Time Zone'
          value='(GMT-12:00) International Date Line West'
        />
      </div>
      <div className='mt-6'>
        <h1 className='text-base font-medium text-[#333B69] mb-4'>Notification</h1>
        <div className='flex justify-start items-center space-x-4 mb-2'>
          <Image src={SwitchOn} alt='on' />
          <p>I send or receive digita currency</p>
        </div>
        <div className='flex justify-start items-center space-x-4 mb-2'>
          <Image src={SwitchOff} alt='off' />
          <p>I receive merchant order</p>
        </div>
        <div className='flex justify-start items-center space-x-4 mb-2'>
          <Image src={SwitchOn} alt='on' />
          <p>There are recommendation for my account</p>
        </div>
      </div>
      <div className='flex justify-end mt-6'>
        <button className='bg-[#1814F3] w-[130px] h-[40px] rounded-lg text-[15px] font-medium text-white'>
          Save
        </button>
      </div>
    </div>
  )
}
