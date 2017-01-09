var express = require('express');
var compression = require('compression');

var app = express();
const PORT = process.env.PORT || 8000;

app.use(compression());

// Support Heroku
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect(`http://${req.hostname}${req.url}`);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log(`Express is listening on http://localhost:${PORT}`);
});