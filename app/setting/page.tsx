'use client'

import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import FormEditProfile from '@/components/formSetting/editProfile'
import FormPreferences from '@/components/formSetting/Preferences'
import FromSecurity from '@/components/formSetting/Security'
import './tabs.css'

export default function Page() {
  return (
    <div className='bg-white rounded-xl p-4'>
      <Tabs>
        <TabList>
          <Tab>Edit Profile</Tab>
          <Tab>Preferences</Tab>
          <Tab>Security</Tab>
        </TabList>
        <TabPanel>
          <FormEditProfile />
        </TabPanel>
        <TabPanel>
          <FormPreferences />
        </TabPanel>
        <TabPanel>
          <FromSecurity />
        </TabPanel>
      </Tabs>
    </div>
  )
}
