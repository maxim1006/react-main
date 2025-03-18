import React from 'react';
import { render } from 'react-dom';
import './assets/styles/main.less';
import { ReactComponent as UserIcon } from './assets/images/icons/user.svg';

const App = () => (
    <>
        Hello world! {process.env.BUILD_TIMESTAMP} <UserIcon style={{ width: 20, height: 20 }} />
    </>
);
render(<App />, document.getElementById('root'));
