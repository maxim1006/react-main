import React, {Component} from 'react';
import './App.css';
import { ArticleComponent } from "./components/Article";

class App extends Component {
    prop = "inner property";

    handleClick = (props, event) => {
        console.log("click in App", props, event)
    };

    render() {

        console.log("this.props ", this.props);

        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reloads.
                    </p>
                    <div>
                        <ArticleComponent
                            booleanProp={true}
                            title="Article title"
                            onClick={this.handleClick}
                        />
                    </div>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
