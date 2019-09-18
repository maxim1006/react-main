import React, {Component} from 'react';
import './SearchList.scss';

export class SearchListComponent extends Component {

    getSearchListBody() {
        return this.props.items.map((item) => {
            return (
                <li
                    className="search-list__item"
                    key={item.id}
                >
                    {item.name} {item.age}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="search-list">
                {this.getSearchListBody()}
            </ul>
        );
    }

}
