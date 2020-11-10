import React from 'react';
import styles from './app.module.less';
import Localization from '../localization/localization.component';
import Gql from '../gql/gql.component';

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            App component
            <Localization />
            <div style={{ marginTop: 40 }}>
                <Gql />
            </div>
        </div>
    );
};

export default App;
