import React, { memo } from 'react';
import { render } from 'react-dom';

// путь сформирован из имени + expose
// также если пути в проекте из которго импорчу совпадают с путями в этом проекте, то будет ошибка
import ChatGql from 'chatGql/ChatGql';

const AppComponent = () => {
    setInterval(() => {
        console.log(ChatGql);
    }, 1000);

    return (
        <>
            <h1>Chat host project</h1>
            <ChatGql />
        </>
    );
};

render(<AppComponent />, document.getElementById('app'));
