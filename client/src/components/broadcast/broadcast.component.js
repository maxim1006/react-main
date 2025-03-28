import { memo, useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';

// чтобы проверить открываю 2 вкладки и смотрю логи / жму кнопки чтобы прокинуть сообщение из окна в другое окно
const bc = new BroadcastChannel('test_channel');

const BroadcastComponent = () => {
    const [value, setValue] = useState('');
    const [broadCastedValue, setBroadCastedValue] = useState();

    const onChange = e => {
        setValue(e.target.value);
    };

    const onClick = () => {
        bc.postMessage(value);
    };

    useEffect(() => {
        const onLocalStorageChanged = e => {
            // сразу будет миллион изменений изза редакса так как там по умолчанию сечу
            console.log('localStorage changed ', e);
        };

        window.addEventListener('storage', onLocalStorageChanged);

        bc.onmessage = ({ data }) => {
            console.log('broadcasted message', { data });
            setBroadCastedValue(data);
        };

        return () => {
            window.removeEventListener('storage', onLocalStorageChanged);
            bc.close();
        };
    }, []);

    return (
        <>
            <TextField id='filled-basic' label='Filled' variant='filled' value={value} onChange={onChange} />
            <Button onClick={onClick} variant='contained' color='primary'>
                Broadcast
            </Button>
            <p style={{ marginTop: 20 }}>Broadcasted value in another tab on the same domain {broadCastedValue}</p>
        </>
    );
};

export default memo(BroadcastComponent);
