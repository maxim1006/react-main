import React, { memo } from 'react';
import { ErrorPartsFragment } from '../../../generated/operations';

type DataErrorsProps = {
    errors: ErrorPartsFragment[] | null | undefined;
};

const DataErrors = memo<DataErrorsProps>(({ errors }) => {
    if (!Array.isArray(errors)) return null;

    return (
        <ul>
            {errors.length > 0 &&
                errors.map(({ field, message }, index) => (
                    <li key={index} style={{ color: 'red' }}>
                        <div>field: {field}</div>
                        <div>message: {message}</div>
                    </li>
                ))}
        </ul>
    );
});

export default DataErrors;
