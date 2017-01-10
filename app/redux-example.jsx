var redux = require('redux');

console.log('Starting redux example');

var nextHobbyId, nextMovieId;
nextHobbyId = nextMovieId = 1;

// Name reducer and action generators
// ----------------------------------
var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

// Hobbies reducer and action generators
// -------------------------------------
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

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
};

// Movies reducer and action generators
// -------------------------------------
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

var addMovie = (title, genre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
};

var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
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
store.dispatch(changeName('Brooks'));

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Bill'
});

store.dispatch(addHobby('Rugby'));

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Firefighting'
});

store.dispatch(addMovie('The Towering Inferno', 'Action'));

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Sausage Party',
    Genre: 'Comedy'
});

store.dispatch(removeHobby(2));

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 1
});
