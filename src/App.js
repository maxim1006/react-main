import React, {Component} from 'react';
import './App.css';
import {Article} from "./components/Article";
import ArticleList from "./components/ArticleList";

class App extends Component {
    prop = "inner property";

    state = {
        articles: []
    };

    handleClick = (props, event) => {
        console.log("click in App from ArticleComponent", props, event)
    };

    componentDidMount() {
        const getArticles = async function() {
            return await fetch("http://localhost:3001/api/articles");
        };

        getArticles()
            .then(res => res.json())
            .then(articles => {
                this.setState({
                    articles
                });
            });
    }

    onRemove = (removedArticle) => {
        const articles = this.state.articles.filter(article => removedArticle !== article);

        this.setState({
            articles
        });
    };

    render() {

        console.log("this.props ", this.props);

        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reloads.
                    </p>
                    <Article
                        booleanProp={true}
                        title="Article title"
                        onClick={this.handleClick}
                    >
                        Main article
                    </Article>

                    <ArticleList
                        onRemove={this.onRemove}
                        articles={this.state.articles}
                    />
                </header>
            </div>
        );
    }
}

export default App;
