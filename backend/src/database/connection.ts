import sql from 'mssql';

// Configuración de la base de datos
const config = {
  user: 'MARIANA',        // Nombre de usuario de la base de datos
// Contraseña de la base de datos
  server: 'MARIANA',       // Dirección del servidor (puede ser una IP o 'localhost')
  database: 'EcomerceProyecto', // Nombre de la base de datos
  options: {
    encrypt: true,           // Si es necesario para tu configuración
   // trustServerCertificate: true // Si usas certificados de seguridad
  }
};

// Función para conectar a la base de datos
export async function connectToDatabase() {
  try {
    const pool = await sql.connect(config);
    console.log("Conectado a la base de datos");
    return pool; // Devolver el pool de conexión para usarlo en otras consultas
  } catch (err) {
    console.error("Error de conexión a la base de datos:", err);
    throw err; // Lanzar el error si ocurre uno
  }
}

// Exportar la instancia de sql para usar en otras partes del proyecto
export { sql };
