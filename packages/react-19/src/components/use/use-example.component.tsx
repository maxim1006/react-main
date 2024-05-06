import { createContext, FC, memo, use } from 'react';
import { delay } from '../../utils/common.utils.ts';

type UseExampleProps = NonNullable<unknown>;

interface ContextModel {
    data: string;
}

const DataContext = createContext<ContextModel>({} as ContextModel);

// если создам этот промис внутри компоненты то получу ошибку
//A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported
// по идее его надо передавать как пропс, который обернут в useMemo
const delayedPromise = delay(1000);

const UseExample: FC<UseExampleProps> = () => {
    // когда зарезолвится этот промис покажется компонента
    use(delayedPromise);

    if (Math.random() < 0.5) {
        console.log('omg conditional context');
        use(DataContext);
    }

    return <div>UseExample</div>;
};

export default memo(UseExample);
