import React from 'react';

import styles from './app.module.scss';

export const map = () => ({
    comp: <TestComponent />,
});

function TestComponent() {
    const id = '123';
    return <div id={id}>TestComponent</div>;
}

export const App = () => {
    return (
        <div className={styles.host}>
            Hello world from App! 27
            {map().comp}
        </div>
    );
};
