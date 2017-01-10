var redux = require('redux');

console.log('Starting redux example');

var defaultState = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
};

var nextHobbyId, nextMovieId;
nextHobbyId = nextMovieId = 1;
var reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            }
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
            };
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            }
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id )
            }
        default:
            return state;
    }
};

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('State Changed', store.getState());
});

// How to unsubscribe
//unsubscribe();

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
