const express = require("express");
const app = express();
const indexRouter = require("./src/routes/router");
app.use(express.static("src"));
app.set("view engine", "ejs");
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log(`Servidor está rodando...`);
});
