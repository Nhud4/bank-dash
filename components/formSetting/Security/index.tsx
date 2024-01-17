'use client'

import React from 'react'
import Image from 'next/image'
import SwitchOn from '@/public/assets/icons/switchOn.svg'
import PasswordInput from '@/components/input/passwordInput'

export default function FromSecurity() {
  return (
    <div>
      <h1>Two-factor Authentication</h1>
      <div className='flex justify-start items-center space-x-4'>
        <Image src={SwitchOn} alt='on' />
        <p>Enable or disable two factor authentication</p>
      </div>
      <h1>Change Password</h1>
      <div className='grid grid-cols-2 gap-y-4 gap-x-8 w-full'>
        <PasswordInput
          label='Current Password'
          placeholder='Current Password'
          value='Current Password'
        />
        <PasswordInput label='New Password' placeholder='New Password' value='New Password' />
      </div>
    </div>
  )
}
