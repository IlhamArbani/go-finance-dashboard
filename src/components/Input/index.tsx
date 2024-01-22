import React from 'react'
import cx from 'classnames';

type Props = {
  type: 'text' | 'number' | 'email',
  placeholder: string,
  icon: string,
}

const Input = (props: Props) => {
  const {
    type,
    placeholder,
    icon
  } = props

  return (
    <div className={cx('w-full border-[1px] rounded-full py-2 px-4')}>
      <div className='flex gap-x-2'>
        {icon && <img src={icon}/>}
        <input
          type={type}
          placeholder={placeholder}
          className={cx('w-full outline-none')}
        />
      </div>
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  icon: null,
}

export default Input