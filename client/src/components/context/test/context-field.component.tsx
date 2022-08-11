import { memo, useContext } from 'react';
import LanguageContext from '@app/context/LanguageContext';

type ContextFieldProps = {};

const ContextField = memo<ContextFieldProps>(function ContextField() {
    const language = useContext(LanguageContext);
    const label = language === 'en' ? 'Name' : 'Имя';

    return (
        <p>
            <label htmlFor='contextFieldName'>{label}</label>
            <input type='text' id='contextFieldName' />
        </p>
    );
});

export default ContextField;
