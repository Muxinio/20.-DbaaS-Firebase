const express = require("express");
const { connect } = require("mongoose");
const routerProducts = require("./routes/routerProducts.js");
const routerCarts = require("./routes/routerCarts.js");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", routerProducts);
app.use("/api/cart", routerCarts);
app.use("*", (req, res) => {
  const path = req.params;
  const method = req.method;
  res.send({
    error: -2,
    descripcion: `ruta '${path[0]}' método '${method}' no implementada`,
  });
});

const server = app.listen(PORT, async () => {
  console.log(`Corriendo en el puerto - ${PORT}`);
});

server.on("error", (err) => console.log(err));
