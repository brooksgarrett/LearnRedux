var {applyMiddleware, compose, combineReducers, createStore} = require('redux');
var thunk = require('redux-thunk').default;
var {hobbiesReducer, mapReducer, moviesReducer, nameReducer} = require('./../reducers');

export  var configure = () => {
    var reducer = combineReducers({
        hobbies: hobbiesReducer,
        map: mapReducer,
        movies: moviesReducer,
        name: nameReducer
    });

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    
    return store;
};
