const port = 7200;

var express = require('express');
var rescue = require('./rescue');

const app = express();
rescue(app);

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});