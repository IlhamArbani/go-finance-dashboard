import React from 'react'

import { Navbar } from '@/components'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default HomeLayout