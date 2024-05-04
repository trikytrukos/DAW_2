const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs').promises;

const PORT = 3000;
const data_music = path.join(__dirname, 'data', 'data.json');

const InternalServerError = 500;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'musicas.html'));
});

app.get('/songs', async (req, res) => {
    try {

        const data = await fs.readFile(data_music, 'utf-8');
        res.json(JSON.parse(data));

    }catch (error) {
        res.status(InternalServerError).send(`Error al leer el archivo : ${error}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


