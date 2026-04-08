const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Serveur operationnel' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Serveur demarre sur http://localhost:' + PORT);
});"correction du fichier server.js(suppression.txt et code stable)"
