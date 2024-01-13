'use client'

import React from 'react'
import TextInput from '@/components/input/textInput'
import PasswordInput from '@/components/input/passwordInput'
import Image from 'next/image'
import Profile from '@/public/assets/images/image01.jpg'

export default function FormEditProfile() {
  return (
    <div className='flex justify-start space-x-6'>
      <div>
        <Image src={Profile} alt='profile' width={110} height={110} className='rounded-full' />
      </div>
      <div className='grid grid-cols-2 gap-y-4 gap-x-8 w-full'>
        <TextInput label='Your Name' placeholder='Your Name' value='Charlene Reed' />
        <TextInput label='User Name' placeholder='User Name' value='Charlene Reed' />
        <TextInput label='Email' placeholder='Email' value='charlenereed@gmail.com' />
        <PasswordInput label='Password' placeholder='Your Password' value='Charlene Reed' />
        <TextInput label='Date of Birth' placeholder='Date of Birth' value='25 January 1990' />
        <TextInput
          label='Present Address'
          placeholder='Present Address'
          value='San Jose, California, USA'
        />
        <TextInput
          label='Permanent Address'
          placeholder='Permanent Address'
          value='San Jose, California, USA'
        />
        <TextInput label='City' placeholder='City' value='San Jose' />
        <TextInput label='Postal Code' placeholder='Postal Code' value='45962' />
        <TextInput label='Country' placeholder='Country' value='USA' />
        <div className='col-end-3 justify-self-end'>
          <button className='bg-[#1814F3] w-[130px] h-[40px] rounded-lg text-[15px] font-medium text-white'>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
