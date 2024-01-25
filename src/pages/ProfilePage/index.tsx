import cx from 'classnames';
import useUsers from '@/hooks/useUsers';
import { ICNullProfile } from '@/assets/icons';

const ProfilePage = () => {
  const {
    data: {
      user
    }
  } = useUsers();
  return (
    <div className={cx('w-full bg-white rounded-md flex flex-col gap-y-4 shadow-md p-4 items-center')}>
      {
        user.avatar ?
        <img
          className={cx('w-24 h-24 rounded-full')}
          src={user.avatar} 
        />:
        <img
          className={cx('w-24 h-24 rounded-full')}
          src={ICNullProfile} 
        />
      }
      <h1 className={cx('text-2xl')}>{user.name}</h1>
      <h2 className={cx('text-xl')}>{user.email}</h2>
    </div>
  )
}

export default ProfilePage