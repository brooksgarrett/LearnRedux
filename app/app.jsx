var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// App CSS
require('style!css!sass!ApplicationStyles');

$(document).foundation();

ReactDOM.render(
    <p>BoilerPlate</p>,
    document.getElementById('app')
);

require('./redux-todo-example.jsx');
