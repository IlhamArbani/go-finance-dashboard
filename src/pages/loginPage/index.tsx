import { Input, Button } from '@/components'
import { ICEmail, ICLock } from '@/assets/icons'
import cx from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LoginPayload } from '@/types'
import useAuth from '@/hooks/useAuth'
import Alert from '@/components/Alert'
import { useEffect } from 'react'

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginPayload>();

  const {
    method: {
      handelResolveLoginService,
      handelResetStatus
    },
    data: {
      status,
    }
  } = useAuth();

  const onSubmit = (data: LoginPayload) => {
    handelResolveLoginService(data);
  }

  useEffect(() => {
    if(status.isSuccess) {
      navigate('/')
    }
    return handelResetStatus
  }, [status.isSuccess])
  return (
    <div className={cx('lg:w-[307px]')}>
      <Alert.Error
        isOpen={status.isError}
        message={status.message}
        onClick={handelResetStatus}
      />
      <h1 className={cx('font-bold text-center text-xl mb-10 lg:hidden')}>Go Finance</h1>
      <div className={cx('mb-10')}>
        <h2 className={cx('font-bold lg:text-2xl')}>Hello Again!</h2>
        <h3 className={cx('lg:text-lg')}>Welcome back</h3>
      </div>
      <div className={cx('flex flex-col gap-y-4')}>
        <Input
          placeholder='Email Address'
          icon={ICEmail}
          name='email'
          register={register}
          isError={errors.email}
          required
        />
        <Input
          placeholder='Password'
          icon={ICLock}
          name='password'
          type='password'
          register={register}
          isError={errors.email}
          required
        />
        <Button
          text='Login'
          onClick={handleSubmit(onSubmit)}
          isLoading={status.isLoading}
        />
        <p className={cx('text-right text-xs text-gray-400')}>Forgot Password?</p>
        <div className={cx('flex justify-center items-center text-xs text-gray-400 mt-4 gap-x-1')}>
          <p>Don't have an account?</p>
          <Link className={cx('underline')} to={'/register'}>register now</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage