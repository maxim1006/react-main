import React, { memo, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "./chat.component.css";
import TextField from "@material-ui/core/TextField";

const GQL_MESSAGES_QUERY = gql`
    query {
        messages {
            id
            content
            user
        }
    }
`;

const ChatComponent = () => {
    const { loading, error, data } = useQuery(GQL_MESSAGES_QUERY);
    const [state, setState] = useState({ user: "Max", content: "" });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="chat">
            <ul>
                {data?.messages.map(({ id, content, user = "Max" }) => {
                    return (
                        <li className={user === "Max" ? "chat__row _my" : "chat__row _other"} key={id}>
                            <span className={user === "Max" ? "chat__message _my" : "chat__message _other"}>
                                <b>{user}:</b> {content}
                            </span>
                        </li>
                    );
                })}
            </ul>
            <div className="chat__control">
                <span className="chat__control-user">Max:</span>
                <TextField variant="filled" label="Input message" />
            </div>
        </div>
    );
};

export default memo(ChatComponent);
