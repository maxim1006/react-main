import {memo, FC, useState, useCallback} from "react";

/**
 * @category Properties
 */
export type CounterProps = {
    /**
     * Default value for Counter component
     */
    defaultValue?: number
}

const Counter: FC<CounterProps> = ({defaultValue = 0}) => {
    const [counter, setCounter] = useState<number>(defaultValue)

    const handleIncrement = useCallback(() => setCounter(counter => ++counter), [])

    const handleDecrement = useCallback(() => setCounter(counter => --counter), [])

    return <div className={'taCounter'}>
        <button onClick={handleDecrement}>dec</button>

        {counter}

        <button onClick={handleIncrement}>incr</button>
    </div>;
};

/**
 *
 * The for rendering counter
 *
 *  [[include:./counter/README.md]]
 *
 * Usage example:
 *
 * ```tsx
 *    <Counter />
 * ```
 *
 * @category Component
 * @component Counter
 */
export default memo(Counter);
