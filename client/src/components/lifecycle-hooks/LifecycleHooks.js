import React, {Component} from 'react';
import {LifecycleParent} from "./LifecycleParent";

// constructor
// render
// componentDidMount

export class LifecycleHooksComponent extends Component {
    state= {
        prop: null
    };

    // в случае если нужно засетить initial state, делаю это в конструкторе
    //
    // Конструктор нужен для:
    // 1) Initializing local state by assigning an object to this.state.
    // 2) Binding event handler methods to an instance.
    //
    // You should not call setState() in the constructor().
    // Instead, if your component needs to use local state,
    // assign the initial state to this.state directly in the constructor:
    constructor(props) {
        super(props);
        console.log("constructor");

        // Если вдруг захочу в процессе апдейта стейта использовать стейт или проперти, обязательно
        // через функцию это делаю
        // setTimeout(() => {this.setState((prevState, prevProps) => ({prop: 1}))}, 1000);
        // setTimeout(() => {this.setState((prevState, prevProps) => ({prop: 2}))}, 2000);
        // setTimeout(() => {this.setState((prevState, prevProps) => ({prop: 3}))}, 3000);

        // При вызове forceUpdate вызовется:
        // render затем componentDidUpdate затем forceUpdate cb
        // setTimeout(() => {this.forceUpdate(_ => console.log('forceUpdate'))}, 4000);

        // пример прямого биндинга стейта и обработки cb
        // this.state = { counter: 0 };
        // this.handleClick = this.handleClick.bind(this);
    }

    // Тут работаю с домом, например чтобы посчитать позицию и проставить в стейт.
    // Тут загружаю дату и делаю рест запросы, тут а не в конструкторе, для консистенси
    // Апдейт стейта тут вызовет render второй раз, но на экране не появится 2 разных стейта, только последний (это микротаск)
    // Срабоатает сразу перед репейнтом
    // Avoid introducing any side-effects or subscriptions in the constructor.
    // For those use cases, use componentDidMount() instead.
    componentDidMount() {
        console.log("componentDidMount");
    }

    // Использую если необходимо апдейтить стейт на основе изменений дома, обязательно с условием см ниже
    // Либо когда надо делать запросы на сервер при изменении входных пропертей, обязательно с условием см ниже
    // Use this as an opportunity to operate on the DOM when the component has been updated.
    // This is also a good place to do network requests as long as you compare the current props to previous props
    // (e.g. a network request may not be necessary if the props have not changed).
    // ex.: componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.userID !== prevProps.userID) {
    //         this.fetchData(this.props.userID);
    //     }
    // }
    // Вызывается после render метода (когда поменяется стейт у родителя), либо когда поменяется стейт у этого компонента
    // componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    // если вызову shouldComponentUpdate и он вернет фолс, то componentDidUpdate вызываться не будет
    // чтобы вызвать насильно ;) вызываю this.forceUpdate(_ => console.log('forceUpdate'))
    shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.prop === 1) {
    //         this.forceUpdate((nextProps, nextState) => console.log('forceUpdate'));
    //     }
    // или проверяю изменилось ли проперти?
    // return nextProps.prop !== this.props.prop;
    // или всегда
        console.log(123);
        return false;
    }

    // clear everything
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    // The render() method is the only required method in a class component.
    //
    // When called, it should examine this.props and this.state and return one of the following types:
    //
    //     React elements. Typically created via JSX. For example, <div /> and <MyComponent /> are React elements that instruct React to render a DOM node, or another user-defined component, respectively.
    // Arrays and fragments. Let you return multiple elements from render. See the documentation on fragments for more details.
    // Portals. Let you render children into a different DOM subtree. See the documentation on portals for more details.
    // String and numbers. These are rendered as text nodes in the DOM.
    // Booleans or null. Render nothing. (Mostly exists to support return test && <Child /> pattern, where test is boolean.)
    // The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
    //
    // If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.
    // Должен только возвращать JSX и все
    render() {
        console.log("render");

        return (
            <LifecycleParent/>
        );
    }
}
