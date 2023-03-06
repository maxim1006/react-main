import React, { FC, memo, useEffect, useState } from 'react';
import styles from './tg-form.module.scss';
import cn from 'classnames';
import { tg } from '@app/constants/common.constants';

type TgFormProps = {};

interface TgFormDataValues {
    country: string;
    city: string;
    gender: string;
}

// это именно
const TgForm: FC<TgFormProps> = () => {
    const [formData, setFormData] = useState<Partial<TgFormDataValues>>({
        city: '',
        country: '',
        gender: '',
    });

    // прокидываю в бот инфо из веб апп
    useEffect(() => {
        const onSendData = () => tg.sendData(JSON.stringify(formData));

        tg.onEvent('mainButtonClicked', onSendData);
        return () => tg.offEvent('mainButtonClicked', onSendData);
    }, [formData]);

    // когда заполнил форму показываю кнопку
    useEffect(() => {
        Object.values(formData).every(i => !!i.trim())
            ? tg.MainButton.show()
            : tg.MainButton.hide();
    }, [formData]);

    return (
        <form
            // onSubmit={(e: FormEvent<HTMLFormElement>) => {
            //     e.preventDefault();
            //     const formData = new FormData(e.target as HTMLFormElement);
            //
            //     console.log(Object.fromEntries(formData.entries()));
            //     const obj = Object.fromEntries(formData.entries()) as unknown as TgFormDataValues;
            // }}
            className={cn(styles.host, 'taTgForm')}
            onChange={e => {
                const { name, value } = e.target as HTMLFormElement;
                setFormData(i => ({ ...i, [name]: value }));
            }}
        >
            <p>Пожалуйста заполните поля:</p>
            <div className={styles.formItem}>
                <input
                    name='country'
                    // pattern='[a-zA-Z0-9]+'
                    minLength={4}
                    maxLength={20}
                    required
                    type='text'
                    placeholder='Country'
                />
            </div>
            <div className={styles.formItem}>
                <input
                    required
                    name='city'
                    // pattern='[a-zA-Z0-9]+'
                    minLength={4}
                    maxLength={20}
                    type='text'
                    placeholder='City'
                />
            </div>
            <div className={styles.formItem}>
                <select name='gender' required>
                    <option value='' />
                    <option value='individual'>Мr</option>
                    <option value='legal'>Mrs</option>
                </select>
            </div>

            {/*если вдруг хочу вспомнить что будет на сабмит*/}
            {/*<TgButton type='submit'>Submit</TgButton>*/}
        </form>
    );
};

export default memo(TgForm);
