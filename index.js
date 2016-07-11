const port = 7200;

var express = require('express');
var bodyParser = require('body-parser');
var rescue = require('./rescue');

const app = express();

app.use(bodyParser.json());
rescue(app);

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});