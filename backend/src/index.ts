import express from 'express';
import { connectToDatabase } from './database/connection';


const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta de prueba para asegurarnos de que el backend funciona
app.get('/', (req, res) => {
  res.send('¡Backend funcionando!');
});

app.get('/test-db', async (req, res) => {
    try {
      const pool = await connectToDatabase(); // Intentar conectar a la base de datos
      res.send('Conexión exitosa a la base de datos');
    } catch (err) {
      console.error('Error de conexión a la base de datos:', err); // Agrega más detalles del error
      res.status(500).send('Error de conexión a la base de datos');
    }
  });

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:3000`);
});
