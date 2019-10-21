*redux-thunk* - middleware for requests in redux


```typescript
// 1)
// Создаю action creator
const createPolicy = ({name, amount}) => ({
    // который возвращает action
    type: 'CREATE_POLICY',
    payload: {
        name,
        amount
    }
});

const deletePolicy = ({name}) => ({
    type: 'DELETE_POLICY',
    payload: {
        name
    }
});

const createClaim = ({name, amount}) => ({
    type: 'CREATE_CLAIM',
    payload: {
        name, amount
    }
});

// 2)
// Reducers
const claimsHistory = (oldListOfClaims = [], action) => {
    switch (action.type) {
        case 'CREATE_CLAIM': {
            return [...oldListOfClaims, action.payload];
        }
        default:
            return oldListOfClaims;
    }
};

const policies = (listOfPolicies = [], action) => {
    switch (action.type) {
        case 'CREATE_POLICY': {
            return [...listOfPolicies, action.payload];
        }
        case 'DELETE_POLICY': {
            return listOfPolicies.filter(({name}) => name !== action.payload.name);
        }
        default:
            return listOfPolicies;
    }
};

// 3)
// Combine Reducers
const ourDepartments = combineReducers({
    claimsHistory,
    policies
});

// 4)
// Создаю стор, который содержит всю дату
const store = createStore(
    ourDepartments,
    // включаю дев тулы
    process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 5)
// Вызываю actions
const action = createPolicy({
    name: "Max",
    amount: 31
});

const action1 = createPolicy({
    name: "Aliya",
    amount: 32
});

const action2 = createClaim({
    name: "Liliya",
    amount: 4
});

const action3 = createClaim({
    name: "Alisa",
    amount: 0
});

const action4 = deletePolicy({
    name: "Aliya"
});


// 6)
// dispatch action
store.dispatch(action);
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);

// console.log(store.getState());
```
