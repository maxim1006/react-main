import React, {memo} from "react";
import {connect} from "react-redux";
import {decrementCounter, incrementCounter} from "../../store/actions";

export interface ICounterProps {
    counter?: number;
    incrementCounter: any;
    decrementCounter: any;
}

const CounterWithMapDispatchToProps = ({counter, incrementCounter, decrementCounter}: ICounterProps) => {
    return (
        <div className="counter">
            <div className="counter__value">
                Value: {counter}
            </div>
            <div className="counter__controls">
                <button type="button" onClick={incrementCounter}>Increment</button>
                <button type="button" onClick={decrementCounter}>Decrement</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any) => ({
    counter: state.counter
});

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(CounterWithMapDispatchToProps));
