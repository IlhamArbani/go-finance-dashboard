import styles from './button.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {
  text: string;
  customClassName: string;
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  type: 'primary' | 'secondary'
  onClick: () => void
}

const Button = (props: Props) => {
  return (
    <button type='button' className={cx(
      'flex py-3 rounded-full justify-center gap-x-2 h-12',
      `button__${props.size}`,
      `button__${props.type}`,
      `${props.customClassName}`
      )}
      onClick={props.onClick}
    >
      <p>{props.text}</p>
    </button>
  )
}

Button.defaultProps = {
  customClassName: '',
  size: 'full',
  type: 'primary'
}

export default Button