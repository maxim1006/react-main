import React, {memo} from "react";
import {connect} from "react-redux";
import {decrementCounter, incrementCounter} from "../../store/actions";

export interface ICounterProps {
    children?: any;
    counter?: number;
    dispatch: any;
}

const Counter = memo(({counter, dispatch}: ICounterProps) => {
    return (
        <div className="counter">
            <div className="counter__value">
                Value: {counter}
            </div>
            <div className="counter__controls">
                <button type="button" onClick={() => dispatch(incrementCounter())}>Increment</button>
                <button type="button" onClick={() => dispatch(decrementCounter())}>Decrement</button>
            </div>
        </div>
    );
});

const mapStateToProps = (state: any, ownProps: any) => ({
    counter: state.counter
});

export default connect(mapStateToProps)(Counter);
