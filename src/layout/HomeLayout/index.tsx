import { Navbar } from '@/components'
import cx from 'classnames';

const HomeLayout = ({children}: any) => {
  return (
    <div>
      <Navbar/>
      <div className={cx('md:px-28 pt-24 px-12')}>
        {children}
      </div>
    </div>
  )
}

export default HomeLayout