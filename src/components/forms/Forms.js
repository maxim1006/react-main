import React, {Component} from 'react';
import {SearchBarComponent} from "../search/SearchBar";
import {SearchListComponent} from "../search/SearchList";

export class FormsComponent extends Component {
    state = {
        items: [],
        filteredItems: []
    };

    componentDidMount() {
        const items = [{text: "Max", id: 1}, {text: "Aliya", id: 2}, {text: "Liliya", id: 3}, {text: "Alisa", id: 4}];
        const filteredItems = items.slice();

        this.setState({
            items, filteredItems
        })
    }

    onInput = (event) => {
        const filteredItems = this.state.items.filter(item => item.text.includes(event.target.value));
        this.setState({ filteredItems });
    };

    render() {
        return (
            <>
                <SearchBarComponent onInput={this.onInput} />
                <SearchListComponent items={this.state.filteredItems} />
            </>
        )
    }

}
