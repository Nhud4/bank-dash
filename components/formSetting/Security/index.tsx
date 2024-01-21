'use client'

import React from 'react'
import Image from 'next/image'
import SwitchOn from '@/public/assets/icons/switchOn.svg'
import PasswordInput from '@/components/input/passwordInput'
import styles from './style.module.css'

export default function FromSecurity() {
  return (
    <div className={styles.wrapper}>
      <h1>Two-factor Authentication</h1>
      <div className='flex justify-start items-center space-x-4 my-4'>
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
        <div className='col-start-1'>
          <PasswordInput label='New Password' placeholder='New Password' value='New Password' />
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
