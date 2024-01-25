import cx from 'classnames';
import { ModalLayout } from '@/layout'
import { ErrorIMG, SuccessIMG } from '@/assets/image';
import { Button } from '..';

type Props = {
  isOpen: boolean;
  message: string;
  onClick: () => void;
}

const Alert = ({isOpen, children}: {isOpen: boolean, children: any}) => {
  return (
    <ModalLayout isOpen={isOpen}>
      <div className={cx('flex flex-col items-center')}>
        {children}
      </div>
    </ModalLayout>
  )
}

const Success = (props: Props) => {
  const {isOpen, message, onClick} = props;
  return (
    <Alert isOpen={isOpen}>
      <img src={SuccessIMG} className={cx('w-28')}/>
      <h1 className={cx('my-3')}>Success !</h1>
      <p className={cx('mb-3')}>{message}</p>
      <Button
        text='Close'
        onClick={onClick}
        size='sm'
      />
    </Alert>
  );
}

const Error = (props: Props) => {
  const {isOpen, onClick, message} = props;
  return (
    <Alert isOpen={isOpen}>
      <img src={ErrorIMG} className={cx('w-28')}/>
      <h1 className={cx('my-3')}>Error !</h1>
      <p className={cx('mb-3')}>{message}</p>
      <Button
        text='Close'
        onClick={onClick}
        size='sm'
      />
    </Alert>
  )
}

Alert.Success = Success;
Alert.Error = Error; 

export default Alert