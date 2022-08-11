import { memo } from 'react';
import ContextButton from '@app/components/context/test/context-button.component';
import ContextField from '@app/components/context/test/context-field.component';

type ContextCreateProps = {};

const ContextCreate = memo<ContextCreateProps>(function ContextCreate() {
    return (
        <div>
            <ContextField />
            <ContextButton />
        </div>
    );
});

export default ContextCreate;
