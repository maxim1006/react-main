// Просто для примера
import {connect} from "react-redux";
import React from "react";

const testIncrease = () => ({
    type: "TEST_INCREASE"
});

const testDecrease = () => ({
    type: "TEST_DECREASE"
});

export const testStore = (state = 0, action) => {
    switch (action.type) {
        case "TEST_INCREASE": {
            return ++state;
        }

        case "TEST_DECREASE": {
            return --state;
        }

        default:
            return state;
    }
};

const testComponent = ({testStore, testDecrease, testIncrease}) => {
    return (
        <>
            <span onClick={testDecrease}>decrease</span>
            <span>{testStore}</span>
            <span onClick={testIncrease}>increase</span>
        </>
    );
};

export default connect(
    (state) => ({
        // testStore: state.testStore
    }),
    {testIncrease, testDecrease}
)(testComponent);
