import ReactDOM from 'react-dom';
import './NotificationPortal.scss';

export default function NotificationPortal({ children, onClose, styleClass }) {
    return ReactDOM.createPortal(
        <div className={`notification ${styleClass}`}>
            <div className='notification__close' onClick={onClose}>
                X
            </div>
            <div className='notification__body'>{children}</div>
        </div>,
        document.querySelector('#notification')
    );
}
