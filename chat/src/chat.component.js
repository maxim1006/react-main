import React, { memo } from "react";
import { gql, useQuery } from "@apollo/client";

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <ul>
                {data?.messages.map(({ id, content, user }) => {
                    return (
                        <li key={id}>
                            {user}: {content}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default memo(ChatComponent);
