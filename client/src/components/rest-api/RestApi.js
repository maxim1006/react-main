import { Component } from 'react';
import customAxios from '../../common/api/axios';

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
        this.cancelGetFamilyRequest = customAxios.CancelToken.source();

        try {
            const { data: items } = await customAxios.get('/family', {
                cancelToken: this.cancelGetFamilyRequest.token,
            });

            this.setState({
                items,
            });
        } catch (e) {
            console.log("FormsComponent componentDidMount fetch('http://localhost:3001/api/articles') error", e);
        }
    }

    render() {
        return (
            <ul>
                {this.state.items.map(({ id, name, age }) => {
                    return (
                        <li key={id}>
                            {name} {age}
                        </li>
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
