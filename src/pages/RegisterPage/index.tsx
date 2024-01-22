import { Input, Button } from '@/components'
import { ICEmail, ICLock, ICUser } from '@/assets/icons'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className={cx('lg:w-[307px]')}>
      <h1 className={cx('font-bold text-center text-xl mb-10 lg:hidden')}>Go Finance</h1>
      <div className={cx('mb-10')}>
        <h2 className={cx('font-bold lg:text-2xl')}>Hello!</h2>
        <h3 className={cx('lg:text-lg')}>Sign Up to Get Started</h3>
      </div>
      <div className={cx('flex flex-col gap-y-4')}>
        <Input
          placeholder='Full Name'
          icon={ICUser}
        />
        <Input
          placeholder='Email Address'
          icon={ICEmail}
        />
        <Input
          placeholder='Password'
          icon={ICLock}
        />
        <Button
          text='Regsiter'
          onClick={() => {}}
        />
        <div className={cx('flex justify-center items-center text-xs text-gray-400 mt-4 gap-x-1')}>
          <p>Have an account?</p>
          <Link className={cx('underline')} to={'/login'}>login now</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage