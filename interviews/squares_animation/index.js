import './styles.css';
import { useState, useEffect } from 'react';

const delay = (time, ...args) =>
    new Promise(res => {
        setTimeout(res, time, args);
    });

export default function App() {
    const [filter, setFilter] = useState(new Array(7).fill(false));

    const handleClick = idx => () => {
        setFilter(prev =>
            prev.map((i, index) => {
                if (index === idx) return !i;

                return i;
            })
        );
    };

    useEffect(() => {
        (async () => {
            if (!filter.includes(false)) {
                for (let i = 6; i >= 0; i--) {
                    setFilter(prev => {
                        prev[i] = false;

                        return [...prev];
                    });

                    await delay(500);
                }
            }
        })();
    }, [filter]);

    const customClassName = idx => `square ${filter[idx] ? '_active' : ''}`;

    return (
        <div className='App'>
            <div className='row'>
                <div className={customClassName(0)} onClick={handleClick(0)}>
                    Square
                </div>
                <div className={customClassName(1)} onClick={handleClick(1)}>
                    Square
                </div>
                <div className={customClassName(2)} onClick={handleClick(2)}>
                    Square
                </div>
            </div>
            <div className='row'>
                <div className={customClassName(3)} onClick={handleClick(3)}>
                    Square
                </div>
            </div>
            <div className='row'>
                <div className={customClassName(4)} onClick={handleClick(4)}>
                    Square
                </div>
                <div className={customClassName(5)} onClick={handleClick(5)}>
                    Square
                </div>
                <div className={customClassName(6)} onClick={handleClick(6)}>
                    Square
                </div>
            </div>
        </div>
    );
}
