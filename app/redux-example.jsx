var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
    //state = state || {name: 'Anonymous'};

    console.log('Action', action);

    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
    }
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log(`beforeDispatch`, currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Brooks'
});

console.log('After Action', store.getState());
