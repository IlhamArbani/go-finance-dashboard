import React from 'react'

import { Navbar } from '@/components'
import cx from 'classnames';

const HomeLayout = ({children}: any) => {
  return (
    <div>
      <Navbar/>
      <div className={cx('px-28 pt-24')}>
        {children}
      </div>
    </div>
  )
}

export default HomeLayout