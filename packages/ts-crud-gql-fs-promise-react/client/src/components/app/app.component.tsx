import React from 'react';
import styles from './app.module.less';
import Localization from '../localization/localization.component';
import Gql from '../gql/gql.component';
import { useQuery } from '@apollo/client';
import { IS_ADMIN } from '../../gql/query/common/common';

const App: React.FC = () => {
    const { data: adminData } = useQuery(IS_ADMIN);
    return (
        <div className={styles.app}>
            <p>is Admin: {JSON.stringify(adminData)}</p>
            App component
            <Localization />
            <div style={{ marginTop: 40 }}>
                <Gql />
            </div>
        </div>
    );
};

export default App;
