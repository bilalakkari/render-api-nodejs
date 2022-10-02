const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express()
app.use(cors());

let data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

app.get('/', function (req, res) {
    res.send('Hello World')
})

var objct = data

app.get('/data', function (req, res) {
    res.send(objct)
})

app.get('/data/:id/:array', (request, response) => {
    const accountId = Number(request.params.id);

    const getAccount = data.find((account) => account.id === accountId);

    if (!getAccount) {
        response.status(500).send('Account not found.')
    } else {
        response.json(getAccount.array);
    }
});


app.listen(3000)