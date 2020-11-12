import React, { Component } from 'react';
import './SearchList.scss';

export class SearchListComponent extends Component {
    getSearchListBody() {
        return this.props.items.map(({ id, name, age }) => {
            return (
                <li className="search-list__item" key={id}>
                    {name} {age}
                </li>
            );
        });
    }

    render() {
        return <ul className="search-list">{this.getSearchListBody()}</ul>;
    }
}
