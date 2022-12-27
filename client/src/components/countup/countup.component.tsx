import CountUp from 'react-countup';
import { FC } from 'react';

const CountupWrapper: FC = () => {
    return (
        <CountUp
            start={-875.039}
            end={160527.012}
            duration={2.75}
            separator=' '
            decimals={4}
            decimal=','
            prefix='EUR '
            suffix=' left'
            onEnd={() => console.log('Ended! 👏')}
            onStart={() => console.log('Started! 💨')}
        >
            {({ countUpRef, start }) => (
                <div>
                    <span ref={countUpRef} />
                    <button onClick={start}>Start</button>
                </div>
            )}
        </CountUp>
    );
};

export default CountupWrapper;
