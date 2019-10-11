const express = require("express");

const app = express();
const puerto = 3000;

app.get("/", (req, res) => {
  res.send({ msg: "Hola mundo" });
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
  console.log(`Ve a http://localhost:${puerto}`);
});
