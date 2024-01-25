import { HomeLayout } from '@/layout'
import { getAuth } from '@/utils/cookieUtils'
import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoute = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      {
        getAuth() ?
        <HomeLayout>
          <Outlet/>
        </HomeLayout> : <Navigate to={'/login'}/>
      }
    </Suspense>
  )
}

export default ProtectRoute