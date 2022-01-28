import React, { Component } from 'react';

export default class AsyncSetState extends Component {
    state = {
        counter: 0,
    };

    onClick = () => {
        // Если вдруг захочу в процессе апдейта стейта использовать стейт или проперти, обязательно
        // через функцию это делаю
        // this.setState((prevState, prevProps) => {...})
        this.setState(({ counter }, { increaseNumber }) => ({
            counter: counter + increaseNumber,
        }));
    };

    render() {
        const { counter } = this.state;

        return (
            <div className='async-set-state'>
                <p>{counter}</p>
                <p>
                    <button type='button' onClick={this.onClick}>
                        Increase
                    </button>
                </p>
            </div>
        );
    }
}
