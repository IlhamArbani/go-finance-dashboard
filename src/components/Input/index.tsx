import React from 'react'
import cx from 'classnames';

type Props = {
  type: 'text' | 'number' | 'email' | 'password',
  placeholder: string,
  icon: string,
  register: any,
  name: string,
  required: boolean,
  isError: any,
}

const Input = (props: Props) => {
  const {
    type,
    placeholder,
    icon,
    register,
    name,
    required,
    isError,
  } = props
  
  return (
    <div>
      <div className={cx('w-full border-[1px] rounded-full py-2 px-4')}>
        <div className='flex gap-x-2'>
          {icon && <img src={icon}/>}
          <input
            type={type}
            placeholder={placeholder}
            className={cx('w-full outline-none')}
            {...register(name, {required})}
          />
        </div>
      </div>
      {isError && <span className='text-red-400'>This field is required</span>}
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  icon: null,
  required: false,
  isError: null,
}

export default Input