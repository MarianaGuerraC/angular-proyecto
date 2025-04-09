/*import sql from 'mssql';

const config: sql.config = {
  user: 'TU_USUARIO_SQL',
  password: 'TU_CONTRASEÑA_SQL',
  server: 'localhost', // o la IP si está en otro equipo
  database: 'TU_BASE_DE_DATOS',
  options: {
    encrypt: false, // Pon true si estás usando Azure
    trustServerCertificate: true // Importante para conexiones locales
  }
};

export const connectToDB = async () => {
  try {
    const pool = await sql.connect(config);
    console.log('✅ Conexión a la base de datos exitosa');
    return pool;
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
    throw error;
  }
};

export default sql;
*/