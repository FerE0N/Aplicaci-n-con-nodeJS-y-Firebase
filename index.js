const express = require("express");
const app = express();
const usuariosRutas = require("./routes/RutasUsuarios");
const productosRutas = require("./routes/rutasProducto");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", usuariosRutas);
app.use("/", productosRutas);

const port=process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en https://localhost:"+port);
});
