import { render } from 'react-dom';
import * as React from 'react';
import { FC, useState } from 'react';
import { LibTitle } from 'custom-react-ts-lib';
import MyCheckbox from './my-checkbox.component';
import { id, offText, onText } from './constants';

const App: FC<{ message: string }> = ({ message }) => {
    const [state, setState] = useState<string>('my state');

    return (
        <div>
            <LibTitle text={'custom npm lib item title'} />
            {message} {state}
            <p>
                <MyCheckbox labelOff={offText} labelOn={onText} id={id} />
            </p>
        </div>
    );
};

render(<App message={'123123'} />, document.getElementById('root'));
