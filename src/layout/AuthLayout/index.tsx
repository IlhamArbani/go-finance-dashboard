import { Button } from '@/components'
import cx from 'classnames'
import { TextureIMG } from '@/assets/image'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className={cx('h-screen lg:flex')}>
      <div className={cx('bg-gradient-to-t from-[#021B79] to-[#0575E6] h-full w-3/5 hidden items-center pl-40 lg:flex')}>
        <div className={cx('w-[249px] text-white')}>
          <h1 className={cx('font-bold text-4xl')}>GoFinance</h1>
          <p className={cx('text-lg mb-5')}>Lorem ipsum dolor sit amet</p>
          <Button
            onClick={() => {}}
            text='Read More'
            size='sm'
          />
        </div>
        <img
          src={TextureIMG}
          className={cx('fixed bottom-0 left-0')}
          width={384}
        />
      </div>
      <div className={cx('flex items-center justify-center px-4 h-full lg:w-2/5 lg:px-28 lg:justify-start')}>
        <Outlet/>
      </div>
    </div>
  )
}

export default AuthLayout