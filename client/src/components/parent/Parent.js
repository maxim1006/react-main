import { Component } from 'react';
import { ChildClass } from './ChildClass';
import ChildFunction from './ChildFunction';

// Интересно что перерисовка состоится только если поменяю входной проперти, либо стейт (только через setState), при чем если менять другой стейт или проперти (не тот что в данном коллбеке на клик например) в методе render() то новое значение не применится пока не сделаю setState

export class Parent extends Component {
    state = {
        inputValue: '',
    };

    onClick = event => {
        console.log(event.target);
    };

    // блюр всплывет (фича реакта) из ChildClass
    onBlur = e => {
        console.log('e.relatedTarget ', e.relatedTarget);
        console.log('e.target ', e.target);
    };

    render() {
        const string = 'Max';
        const obj = { prop: 1 };
        const rest = { propFromRestOperator: 'prop from rest' };

        return (
            <div onBlur={this.onBlur}>
                {/* это только пример асинхронности settState, вторым аргументом он принимает функцию, которая выполнится
                    когда выполнится setState*/}
                <input
                    type='text'
                    onChange={e => {
                        const { value } = e.target;
                        // первый вэлью не появится в консоли так как setState асинхронная,
                        // чтобы получить актуальное значение использую второй аргумент - функцию
                        this.setState({ inputValue: e.target.value }, () =>
                            console.log('second arg in setState ', this.state, value)
                        );
                        console.log('synchronous log after setState ', this.state, value);
                    }}
                />
                {/* truthy без value значит truthy=true*/}
                <ChildClass truthy string={string} obj={obj} {...rest} />
                <ChildFunction truthy obj={obj} {...rest} onClick={this.onClick} />
                <div onClick={this.onClick}>Cant click on Component itself but can on node</div>
            </div>
        );
    }
}
