import { memo } from 'react';

const isRequired = a => {
    console.log(a);
    throw new Error('param is required');
};

const MethodParameterValidationTipComponent = ({ requiredProp = isRequired() }) => {
    // если раскомментирую будет ошибка, так как проверка сработает
    // const print = (num = isRequired()) => {
    //     console.log(`printing ${num}`);
    // };
    // print(2); // printing 2
    // print(); // error
    // print(null); // printing null

    return requiredProp;
};

export default memo(MethodParameterValidationTipComponent);
