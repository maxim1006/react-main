import React, {Component} from 'react';
import ciustomAxios from "../../api/axios";

export class RestApiComponent extends Component {
    state = {
        items: [],
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
        this.cancelGetFamilyRequest = ciustomAxios.CancelToken.source();

        try {
            const {data: items} = await ciustomAxios.get('/family',{
                cancelToken: this.cancelGetFamilyRequest.token
            });

            this.setState({
                items
            });
        } catch (e) {
            console.log('FormsComponent componentDidMount fetch(\'http://localhost:3001/api/articles\') error', e);
        }
    }

    render() {
        return (
            <ul>
                {this.state.items.map(item => {
                    return (
                        <li key={item.id}>{item.name} {item.age}</li>
                    );
                })}
            </ul>
        );
    }

    componentWillUnmount() {
        // убиваю реквест через axios
        this.cancelGetFamilyRequest.cancel('http://localhost:3001/api/family canceled');
    }
}
