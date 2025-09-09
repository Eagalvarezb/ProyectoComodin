const fs = require("fs");
const path = require("path");
const express = require("express");

module.exports = (app) => {
    const routesPath = __dirname;

    fs.readdirSync(routesPath).forEach(file => {
        if (file.endsWith(".routes.js")) {
            const fullPath = path.join(routesPath, file);
            try {
                const route = require(fullPath);

                if (typeof route === "function") {
                    route(app);
                    console.log(`Ruta cargada como función: ${file}`);
                } else if (route instanceof express.Router) {
                    app.use(route);
                    console.log(`Ruta cargada como Router: ${file}`);
                } else {
                    console.error(`El archivo '${file}' no exporta una función ni un Router válido.`);
                }
            } catch (err) {
                console.error(`Error cargando la ruta '${file}':`, err.message);
            }
        }
    });
};
