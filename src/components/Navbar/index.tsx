import React, {useState} from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { ICArrowDown, ICNullProfile } from '@/assets/icons'

const Navbar = () => {
  const [isHideToggle, setHideToggle] = useState(true)
  return (
    <nav id='home' className="bg-primary border-gray-200 relative z-30">
      <div className="flex flex-wrap items-center justify-end p-4 w-screen md:px-20 md:py-0">
        <div className={cx('md:flex text-white gap-x-3 px-12 border-l-2 border-l-[#0000001F] py-4 hidden')}>
          <img src={ICNullProfile} />
          <div>
            <div className={cx('flex gap-x-3')}>
              <h1>Ilham Naufal A</h1>
              <img src={ICArrowDown}/>
            </div>
            <p>Software Engineer</p>
          </div>
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
              <Link to={'/profile'} className="block py-2 px-3 text-white">Log Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar