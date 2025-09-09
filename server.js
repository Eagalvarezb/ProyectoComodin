const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8083;

// Configuración de CORS
const corsOptions = {
    origin: `http://localhost:${PORT}`
};
app.use(cors(corsOptions));

// Parseo de JSON y URL encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importamos la base de datos y modelos
const db = require("./app/models");

// Solo autenticamos la conexión
db.sequelize.authenticate()
    .then(() => {
        console.log("Database connected successfully.");

        // Cargamos todas las rutas
        require("./app/routes/loadRoutes.js")(app);

        // Ruta base
        app.get("/", (req, res) => {
            res.json({ message: "Welcome to UMG Web Application!" });
        });

        // Manejo de rutas no encontradas
        app.use((req, res) => {
            res.status(404).json({ error: "Ruta no encontrada" });
        });

        // Iniciamos el servidor
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to database:", err.message);
    });
