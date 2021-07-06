import React, { Component } from 'react';
import { LifecycleChild } from './LifecycleChild';
import LifecycleChildHooks from './LifecycleChildHooks';

// Тут показываю пример оптимизации чайлдовой компоненты, которая по умолчанию перерендеривается каждый раз когда меняется стейт у родителя, но у родителя стейт может меняться по куче причин, а чайлду интересно перерендериваться только когда поменяется входящий prop, а не prop1, поэтому запрещаю чайлду ререндеринг по умолчанию, а только в случае изменения this.state.prop (см. LifecycleChild)
export class LifecycleParent extends Component {
    state = {
        prop: 1,
        prop1: 1,
    };

    changeProp = () => {
        this.setState(({ prop }, prevProp) => ({
            prop: ++prop,
        }));
    };

    changeProp1 = () => {
        this.setState(({ prop1 }, prevProp) => ({
            prop1: ++prop1,
        }));
    };

    render() {
        return (
            <>
                <p>
                    <button type="button" style={{ marginRight: '20px' }} onClick={this.changeProp}>
                        Change prop
                    </button>
                    <button type="button" onClick={this.changeProp1}>
                        Change prop1
                    </button>
                </p>
                <LifecycleChild {...this.state} />
                <LifecycleChildHooks {...this.state} />
            </>
        );
    }
}
