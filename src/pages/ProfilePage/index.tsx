import cx from 'classnames';
import { ICNullProfile } from '@/assets/icons';
import { useGetUserQuery } from '@/store/usersApi';
import { getUser } from '@/utils/cookieUtils';

const ProfilePage = () => {

  const {currentData} = useGetUserQuery(getUser())
  return (
    <div className={cx('w-full bg-white rounded-md flex flex-col gap-y-4 shadow-md p-4 items-center')}>
      {
        currentData?.data.avatar ?
        <img
          className={cx('w-24 h-24 rounded-full')}
          src={currentData?.data.avatar} 
        />:
        <img
          className={cx('w-24 h-24 rounded-full')}
          src={ICNullProfile} 
        />
      }
      <h1 className={cx('text-2xl')}>{`${currentData?.data.first_name} ${currentData?.data.last_name}`}</h1>
      <h2 className={cx('text-xl')}>{currentData?.data.email}</h2>
    </div>
  )
}

export default ProfilePage