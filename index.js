const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: 'mysql',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'forms_dev'
});

db.connect((error) => {
  if (error) {
    console.error('Error conectando a la base de datos:', error);
    return;
  }
  console.log('Conectado a la base de datos');
});

app.post('/autos', (req, res) => {
  const { modelo, anho } = req.body;
  const query = `INSERT INTO autos (modelo, anho) VALUES ('${modelo}', '${anho}')`;

  db.query(query, (error) => {
    if (error) {
      console.error('Error insertando en la base de datos:', error);
      res.status(500).send('Error insertando en la base de datos');
      return;
    }

    res.status(200).send('Objeto insertado correctamente');
  });
});

app.listen(5000, () => {
  console.log('Servidor escuchando en el puerto 5000');
});