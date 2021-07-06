import React, { Component } from 'react';
import customAxios from '../../common/api/axios';

export default class extends Component {
    state = {
        list: [],
    };

    componentDidMount() {
        this.getHooks();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // обязатльно ставлю условие, так как при изменении стейта как внешнего так и этого компонента
        // будет вызываться componentDidUpdate
        if (prevProps.resource !== this.props.resource) {
            this.getHooks();
        }
    }

    componentWillUnmount() {
        this.cancelHooksRequest.cancel("HooksListClass get('/hooks'... canceled");
    }

    render() {
        const { list } = this.state;

        return list ? (
            <ul className="hooks-list">
                {list.map(({ title }, index) => (
                    <li className="hooks-list__item" key={index}>
                        {title}
                    </li>
                ))}
            </ul>
        ) : (
            <p>"no items"</p>
        );
    }

    getHooks = async () => {
        if (this.cancelHooksRequest) {
            this.cancelGetHooks();
        }

        this.cancelHooksRequest = customAxios.CancelToken.source();

        try {
            const { data: list } = await customAxios.get(`/hooks/${this.props.resource}`, {
                cancelToken: this.cancelHooksRequest.token,
            });

            this.setState({
                list,
            });
        } catch (e) {
            console.log("HooksListClass get('/hooks'... error ", e);
        }
    };

    cancelGetHooks = () => {
        this.cancelHooksRequest.cancel("HooksListClass get('/hooks'... canceled");
    };
}
