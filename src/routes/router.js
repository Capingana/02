const express = require("express");
const router = express.Router();

// ==============ROTAS
router.get("/", (request, response) => {
  response.status(200).render("home", { titulo: "Pagina de inicio" });
});
router.get("/candidatos-inscritos", (request, response) => {
  response
    .status(200)
    .render("candidatos", {
      titulo: "Página de candidatos",
      lista_de_candidatos: "Lista de candidatos inscritos",
    });
});

router.use((request, response) => {
  response.status(404).render("404");
});

module.exports = router;
