import { memo } from 'react';
import './ShopFormInput.scss';

export default memo(({ handleChange, label, ...restProps }) => {
    return (
        <div className='shop-form-input'>
            {label ? <label htmlFor={restProps.id}>{label}</label> : null}
            <input onChange={handleChange} {...restProps} />
        </div>
    );
});
