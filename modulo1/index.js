const express = require("express");
const server = express();
server.use(express.json());

const users = ["Diego", "Victor", "Robson"];
// Criação de usuario
server.post("/users", (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

//Listando usuários
server.get("/users", (req, res) => {
  return res.json(users);
});
server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

// Editando usuários:
server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { nome } = req.body;
  users[index] = nome;
  return res.json(users);
});
// Remover usuários:
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);

  return res.send();
});
server.listen(3000);
