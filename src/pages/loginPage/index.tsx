import React from 'react'
import { Input } from '@/components'
import { ICEmail, ICLock } from '@/assets/icons'

const LoginPage = () => {
  return (
    <div>
      <h1>Go Finance</h1>
      <div>
        <h2>Hello Again</h2>
        <h3>Welcome back</h3>
      </div>
      <Input
        placeholder='Email Address'
        icon={ICEmail}
      />
      <Input
        placeholder='Password'
        icon={ICLock}
      />
    </div>
  )
}

export default LoginPage