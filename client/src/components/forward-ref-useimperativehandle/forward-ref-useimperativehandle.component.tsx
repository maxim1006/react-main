import React, {
    memo,
    FC,
    useState,
    useRef,
    forwardRef,
    useImperativeHandle,
    MutableRefObject,
    ChangeEventHandler,
} from 'react';

type ForwradRefUseImperativeHandleProps = {};

const ForwradRefUseImperativeHandle: FC<ForwradRefUseImperativeHandleProps> = () => {
    const [value, setValue] = useState('red');
    const ref = useRef(null);
    const customRef = useRef<CustomRefModel>(null);

    return (
        <div>
            <CustomInput customRef={customRef} ref={ref} value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => ref.current.focus()}>Click</button>
            <button
                onClick={() => {
                    customRef.current.log();
                }}
            >
                Click customRef
            </button>
        </div>
    );
};

type CustomInputProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    customRef: MutableRefObject<CustomRefModel>;
};

interface CustomRefModel {
    log(): void;
}

const CustomInput = memo(
    // так использую forwardRef нужно чтобы прокинуть ref
    // React.forwardRef<RefType, PropsType>
    forwardRef<HTMLInputElement, CustomInputProps>(({ value, onChange, customRef }, ref) => {
        // так удобно возвращать всякие методы которые можно дернуть для получения внутренних данных ну или фокусить внутренние элементы и тд
        useImperativeHandle(
            customRef,
            () => ({
                log() {
                    console.log('log from useImperativeHandle');
                },
            }),
            []
        );

        return <input ref={ref} type='text' value={value} onChange={onChange} />;
    })
);

export default memo(ForwradRefUseImperativeHandle);
