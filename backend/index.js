import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: "*"
}));

// conexion a DB
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bogota.12",
  database: "df_tech"
});

db.connect((err) => {
  if (err) {
    console.error("Error conexión DB:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

//  RUTA DE PRUEBA (la tuya)
app.get("/", (req, res) => {
  res.json({ 
    mensaje: "Backend DF Tech funcionando!"
  });
});

//  NUEVA RUTA: FORMULARIO
app.post("/contacto", (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  // Validación básica
  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const sql = `
    INSERT INTO contactos (nombre, correo, mensaje) 
    VALUES (?, ?, ?)
  `;

  db.query(sql, [nombre, correo, mensaje], (err, result) => {
    if (err) {
      console.error("Error al guardar:", err);
      return res.status(500).json({ error: "Error en el servidor" });
    }

    res.json({ mensaje: "Mensaje enviado correctamente ✅" });
  });
});

//erorres 404
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// se debe separar base de datos NO OLVIDAR 