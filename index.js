var express = require('express');
const app = express();
const port = 7200;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});