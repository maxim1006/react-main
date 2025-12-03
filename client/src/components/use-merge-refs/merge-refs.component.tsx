import React, { forwardRef, useRef } from 'react';
import { useMergeRefs } from '@floating-ui/react';

type MyInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const MyInput = forwardRef<HTMLInputElement, MyInputProps>(function MyInput(props, externalRef) {
    // Объединяем внешний ref + внутренний ref
    const mergedRef = useMergeRefs([externalRef]);

    return <input {...props} ref={mergedRef} />;
});

export default function MergeRefs(props: MyInputProps) {
    const parentRef = useRef<HTMLInputElement | null>(null);

    return (
        <div>
            <MyInput ref={parentRef} placeholder='Введите текст' />

            <button
                onClick={() => {
                    console.log('DOM element:', parentRef.current);
                    parentRef.current?.focus();
                }}
            >
                Фокус
            </button>
        </div>
    );
}
