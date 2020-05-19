import React, { Component } from "react";
import { SearchBarComponent } from "../search/SearchBar";
import { SearchListComponent } from "../search/SearchList";
import MaterialLoader from "../loader/MaterialLoader";
import customAxios from "../../common/api/axios";

export class FormsComponent extends Component {
    state = {
        items: [],
        filteredItems: [],
        isFamilyLoading: false
    };

    cancelGetFamilyRequest = null;

    async componentDidMount() {
        // Promise variant
        // try {
        //     const family = await fetch('http://localhost:3001/api/family');
        //     const items = await family.json();
        //
        //     const filteredItems = items.slice();
        //
        //     this.setState({
        //         items, filteredItems
        //     });
        // } catch (e) {
        //     console.log('FormsComponent componentDidMount fetch(\'http://localhost:3001/api/articles\') error', e);
        // }

        // axios variant
        this.cancelGetFamilyRequest = customAxios.CancelToken.source();

        try {
            const { data: items } = await customAxios.get("/family", {
                cancelToken: this.cancelGetFamilyRequest.token
            });
            const filteredItems = items.slice();

            this.setState({
                items,
                filteredItems,
                isFamilyLoading: true
            });
        } catch (e) {
            console.log(
                "FormsComponent componentDidMount fetch /family error",
                e
            );
        }
    }

    onInput = event => {
        const filteredItems = this.state.items.filter(({ name }) =>
            name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        this.setState({ filteredItems });
    };

    render() {
        return this.state.isFamilyLoading
            ? this.renderContent()
            : this.renderLoader();
    }

    componentWillUnmount() {
        // убиваю реквест через axios
        this.cancelGetFamilyRequest.cancel(
            "http://localhost:3001/api/family canceled"
        );
    }

    renderContent() {
        return (
            <SearchBarComponent onInput={this.onInput}>
                <SearchListComponent items={this.state.filteredItems} />
            </SearchBarComponent>
        );
    }

    renderLoader() {
        return (
            <div
                style={{
                    transform: "scale3d(0.8, 0.8, 0.8)"
                }}
            >
                <MaterialLoader message="Loading family" />
            </div>
        );
    }
}
