import React from 'react';
import {AnotherArticle} from "./AnotherArticle";

export default function ArticleList(props) {

    function onRemove(articleProps) {
        props.onRemove.call(null, articleProps.article);
    }

    const articleNodes = props.articles.map(article =>
        <li key={article.id}>
            <AnotherArticle
                article={article}
                onRemove={onRemove}
            />
        </li>
    );
    const articleList = props.articles.length ? <ul>{articleNodes}</ul> : null;

    return (
        <div className="article-list">
            {articleList}
        </div>

    );
}
