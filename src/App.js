import React, {Component} from 'react';
import './App.scss';
import JSXExampleComponent from "./components/jsx/jsx-examples";
import {Article} from "./components/article/Article";
import ArticleList from "./components/article/ArticleList";
import {CommentListComponent} from "./components/comment/CommentList";
import {ClassBasedComponent} from "./components/class-based/ClassBased";
import {LifecycleHooksComponent} from "./components/lifecycle-hooks/LifecycleHooks";
import {TabsComponent} from "./components/tabs/Tabs";

class App extends Component {
    state = {
        articles: []
    };

    prop = "inner property";

    directories = {
        components: true,
        jsx: false
    };

    componentDidMount() {
        const getArticles = async function () {
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

    render() {
        return (
            <div className="app">
                <main className="app__main">
                    <TabsComponent>
                        <div tabName="Components">
                            <LifecycleHooksComponent />

                            <ClassBasedComponent />

                            <CommentListComponent/>

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
                        </div>
                        <div tabName="JSX">
                            <JSXExampleComponent />
                        </div>
                    </TabsComponent>
                </main>
            </div>
        );
    }

    handleClick = (props, event) => {
        console.log("click in App from ArticleComponent", props, event)
    };

    onRemove = (removedArticle) => {
        const articles = this.state.articles.filter(article => removedArticle !== article);

        this.setState({
            articles
        });
    };
}

export default App;
