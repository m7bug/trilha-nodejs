const express = require("express");

const app = express();
app.use(express.json());

/**
 * *** Tipos de métodos ***
 *
 * GET    - Buscar uma informação dentro do servidor
 * POST   - Inserir uma informação no servidor
 * PUT    - Alterar uma informação no servidor
 * PATCH  - Altear uma informação especifica no servidor
 * DELETE - Deletar uma informação no servidor
 */

/**
 * *** Tipos de parâmetros ***
 *
 * Route Params => Identificar um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params => Os objetos inserção/alteração
 */

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);

  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);

  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3333, () => console.log("server running..."));
