import { Input, Button } from '@/components'
import { ICEmail, ICLock, ICUser } from '@/assets/icons'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { RegisterPayload } from '@/types'
import Alert from '@/components/Alert'
import useUsers from '@/hooks/useUsers'
import { usePostUserMutation } from '@/store/usersApi'

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterPayload>();

  const {
    data: {
      status,
    }
  } = useUsers();

  const [postMutation, {isLoading, isSuccess, isError, reset}] = usePostUserMutation();

  const onSubmit = (data: RegisterPayload) => {
    postMutation(data);
  }

  return (
    <div className={cx('lg:w-[307px]')}>
      <Alert.Success
        isOpen={isSuccess}
        message={status.message}
        onClick={reset}
      />

      <Alert.Error 
        isOpen={isError}
        message={status.message}
        onClick={reset}
      />

      <h1 className={cx('font-bold text-center text-xl mb-10 lg:hidden')}>Go Finance</h1>
      <div className={cx('mb-10')}>
        <h2 className={cx('font-bold lg:text-2xl')}>Hello!</h2>
        <h3 className={cx('lg:text-lg')}>Sign Up to Get Started</h3>
      </div>
      <div className={cx('flex flex-col gap-y-4')}>
        <Input
          placeholder='Full Name'
          icon={ICUser}
          name='username'
          register={register}
          isError={errors.username}
          required
        />
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
          register={register}
          isError={errors.password}
          type='password'
          required
        />
        <Button
          text='Regsiter'
          onClick={handleSubmit(onSubmit)}
          isLoading={isLoading}
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