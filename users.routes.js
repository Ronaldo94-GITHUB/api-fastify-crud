const usersController = require("../controllers/users.controller");

async function usersRoutes(fastify) {
  fastify.get("/users", usersController.listUsers);
  fastify.get("/users/:id", usersController.getUserById);
  fastify.post("/users", usersController.createUser);
  fastify.put("/users/:id", usersController.updateUser);
  fastify.delete("/users/:id", usersController.deleteUser);
}

module.exports = usersRoutes;