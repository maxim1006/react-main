import './Component.scss';

export default function Component({ title, children }) {
    return (
        <div className='component'>
            <h3 className='component__title'>{title}</h3>
            <div className='component__body'>{children}</div>
        </div>
    );
}
