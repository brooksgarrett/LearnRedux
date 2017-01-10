var redux = require('redux');

console.log('Starting redux example');

var defaultState = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};

var nextHobbyId, nextMovieId;
nextHobbyId = nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id);
        
        default:
            return state;
    }
};

var moviesReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_MOVIE':
            return [
            ...state,
            {
                id: nextMovieId++,
                title: action.title,
                genre: action.genre
            }
            ]
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id );
        default:
            return state;
    }
};

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('State Changed', store.getState());
});

// How to unsubscribe
//unsubscribe();


// Example Dispatches
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Brooks'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Bill'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Rugby'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Firefighting'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'The Towering Inferno',
    Genre: 'Action'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Sausage Party',
    Genre: 'Comedy'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});
