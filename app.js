const filename = __filename;
const dirname = __dirname;

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('wot!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});