const express = require('express');
const { Associado } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    Associado.findAll().then(dados => {
        res.status(200).json(dados);

    }).catch( e => {
        console.log(e.message);
    })
})

const PORT = 3000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));