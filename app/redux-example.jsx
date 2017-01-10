var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('State Changed', store.getState());
    if (state.map.isFetching) {
        document.getElementById('main').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('main').innerHTML = `<a target="_blank" href="${state.map.url}">View your location</a>`;
    }
});

// How to unsubscribe
//unsubscribe();


// Example Dispatches
store.dispatch(actions.changeName('Brooks'));

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Bill'
});

store.dispatch(actions.addHobby('Rugby'));

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Firefighting'
});

store.dispatch(actions.addMovie('The Towering Inferno', 'Action'));

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Sausage Party',
    Genre: 'Comedy'
});

store.dispatch(actions.removeHobby(2));

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});

store.dispatch(actions.fetchLocation());
