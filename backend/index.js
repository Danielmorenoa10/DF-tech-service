import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: "*"  // Cambia por tu frontend URL en producción
}));

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ 
    mensaje: "Backend DF Tech funcionando!",
  });
}); // <--- ¡Aquí faltaba cerrar la ruta!

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});