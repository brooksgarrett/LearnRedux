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

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    document.getElementById('main').innerHTML = `<h1>${state.searchText}</h1>`;
});





// How to unsubscribe
// unsubscribe();

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'work'
});

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'stuff'
});

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'nope'
});

console.log('After unsub', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCHTEXT',
    searchText: 'things'
});
