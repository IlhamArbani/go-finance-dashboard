import ReactDOM from 'react-dom';
import cx from 'classnames';

const modalRoot = document.getElementById('modal-root');

type Props = {
  isOpen: boolean;
  children: any
}

const ModalLayout = (props: Props) => {
  const {isOpen, children} = props;
  return isOpen ? ReactDOM.createPortal(
    <div className={cx('w-screen h-screen flex justify-center items-center absolute bg-slate-300/50 z-50')}>
      <div className={cx('min-w-80 md:min-w-96 bg-white rounded-md p-3')}>
        {children}
      </div>
    </div>, modalRoot!,
  ) : <></>;
}



export default ModalLayout