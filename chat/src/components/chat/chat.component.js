import React, { memo, useState } from 'react';
import { gql, useMutation, useSubscription } from '@apollo/client';
import './chat.component.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const GET_MESSAGES_QUERY = gql`
    subscription {
        messages {
            id
            content
            user
        }
    }
`;

const POST_MESSAGE = gql`
    mutation($user: String!, $content: String!) {
        postMessage(user: $user, content: $content)
    }
`;

const ChatComponent = () => {
    const [textFieldValue, setTextFieldValue] = useState('');
    const { loading, error, data } = useSubscription(GET_MESSAGES_QUERY);
    const [sendMessage, { data: sendMessageData }] = useMutation(POST_MESSAGE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const onSendMessageFieldChange = e => {
        setTextFieldValue(e.target.value);
    };

    const onSend = e => {
        sendMessage({ variables: { content: textFieldValue, user: 'Max' } });
    };

    return (
        <div className="chat">
            <ul className="chat__list">
                {data?.messages.map(({ id, content, user = 'Max' }) => {
                    return (
                        <li className={user === 'Max' ? 'chat__row _my' : 'chat__row _other'} key={id}>
                            <span className={user === 'Max' ? 'chat__message _my' : 'chat__message _other'}>
                                <b>{user}:</b> {content}
                            </span>
                        </li>
                    );
                })}
            </ul>
            <div className="chat__control">
                <span className="chat__control-user">Max:</span>
                <TextField
                    value={textFieldValue}
                    onChange={onSendMessageFieldChange}
                    size="small"
                    variant="filled"
                    label="Input message"
                    onSubmit={onSend}
                />
                <Button onClick={onSend} style={{ marginLeft: 20 }} variant="contained" color="primary">
                    Send
                </Button>
            </div>
        </div>
    );
};

export default memo(ChatComponent);
