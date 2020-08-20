import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import "./index.css";
import ChatComponent from "./chat.component";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache()
});

const AppComponent = () => {
    return (
        <ApolloProvider client={client}>
            Hi there, I&apos;m React from Webpack 5.
            <Button variant="contained" color="primary">
                Default
            </Button>
            <ChatComponent />
        </ApolloProvider>
    );
};

ReactDOM.render(<AppComponent />, document.getElementById("app"));
