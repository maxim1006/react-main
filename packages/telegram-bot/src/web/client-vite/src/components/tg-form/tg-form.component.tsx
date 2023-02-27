import React, { memo, FC, useRef } from 'react';
import styles from './tg-form.module.scss';
import cn from 'classnames';
import TgButton from '@app/components/tg-button/tg-button.component';

type TgFormProps = {};

const TgForm: FC<TgFormProps> = () => {
    const countryRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLSelectElement>(null);

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                console.log(123);
            }}
            className={cn(styles.host, 'taTgForm')}
        >
            <div className={styles.formItem}>
                <input
                    pattern='[a-zA-Z0-9]+'
                    minLength={4}
                    maxLength={20}
                    required
                    type='text'
                    ref={countryRef}
                    placeholder='Country'
                />
            </div>
            <div className={styles.formItem}>
                <input
                    required
                    pattern='[a-zA-Z0-9]+'
                    minLength={4}
                    maxLength={20}
                    type='text'
                    ref={cityRef}
                    placeholder='City'
                />
            </div>
            <div className={styles.formItem}>
                <select required ref={typeRef}>
                    <option value='' />
                    <option value='individual'>Физ лицо</option>
                    <option value='legal'>Юр лицо</option>
                </select>
            </div>

            <TgButton type='submit'>Submit</TgButton>
        </form>
    );
};

export default memo(TgForm);
