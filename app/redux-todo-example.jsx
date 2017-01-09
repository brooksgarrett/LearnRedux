var redux = require('redux');

console.log('Starting redux');

var defaultState = {
        searchText: '',
        showCompleted: false,
        todos: []
    };

var reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCHTEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer);

console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'work'
});

console.log('postDispatch', store.getState());
