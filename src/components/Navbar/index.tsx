import {useEffect, useState} from 'react'
import cx from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import { ICArrowDown, ICNullProfile } from '@/assets/icons'
import useAuth from '@/hooks/useAuth'
import Alert from '../Alert'
import { getUser, resetCookie } from '@/utils/cookieUtils'
import { useGetUserQuery } from '@/store/usersApi'
import { useLogoutMutation } from '@/store/authApi'

const Navbar = () => {
  const navigate = useNavigate();
  const [isHideToggle, setHideToggle] = useState(true);
  const [isHideModal, setHideModal] = useState(true);
  const {
    data: {
      status
    }
  } = useAuth();

  const {data} = useGetUserQuery(getUser());
  const [logout, {isSuccess, isError, reset, isLoading}] = useLogoutMutation();

  useEffect(() => {
    if(isSuccess){
      resetCookie();
      navigate('/login');
    }
  }, [isSuccess])

  return (
    <nav id='home' className="bg-primary border-gray-200 relative z-30">
      <Alert.Error
        isOpen={isError}
        message={status.message}
        onClick={reset}
      />
      <div className="flex flex-wrap items-center justify-end p-4 w-screen md:px-20 md:py-0">
        <div className={cx('md:flex text-white gap-x-3 px-12 border-l-2 border-l-[#0000001F] py-4 hidden')}>
          {
            data?.data.avatar ?
            <img
              className={cx('w-12 h-12 rounded-full')}
              src={data?.data.avatar} 
            />:
            <img
              className={cx('w-12 h-12 rounded-full')}
              src={ICNullProfile} 
            />
          }
          <div
            className={cx('cursor-pointer')}
            onClick={() => setHideModal(!isHideModal)}
          >
            <div className={cx('flex gap-x-3')}>
              <h1>{`${data?.data.first_name} ${data?.data.last_name}`}</h1>
              <img src={ICArrowDown}/>
            </div>
            <p>Software Engineer</p>
          </div>
          {
            !isHideModal &&
            <div className={cx('bg-white absolute p-3 right-28 w-44 rounded-md -bottom-16 border-[1px] hidden z-10 md:block')}>
              <Link to={'/profile'} onClick={() => setHideModal(true)} className={cx('text-black mb-4 cursor-pointer')}>
                <p>Profile</p>
              </Link>
              <p
                className={cx('text-black cursor-pointer', {'animate-pulse': isLoading})}
                onClick={() => logout()}
              >
                Logout
              </p>
            </div>
          }
        </div>
        <button onClick={() => setHideToggle(!isHideToggle)}  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className={cx("w-full md:hidden", {'hidden': isHideToggle})} id="navbar-default">
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-primary rounded-b-full ">
            <li>
              <Link to={'/profile'} className="block py-2 px-3 text-white">Profile</Link>
            </li>
            <li>
              <p onClick={() => logout()} className={cx("block py-2 px-3 text-white", {'animate-pulse': isLoading})}>Log Out</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar