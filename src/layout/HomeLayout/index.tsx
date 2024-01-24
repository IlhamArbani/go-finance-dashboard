import React from 'react'

import { Navbar } from '@/components'

const HomeLayout = ({children}: any) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default HomeLayout