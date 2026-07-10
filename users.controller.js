const usersService = require("../services/users.service");

async function listUsers(request, reply) {
  return usersService.listUsers();
}

async function getUserById(request, reply) {
  const user = usersService.findUserById(request.params.id);

  if (!user) {
    return reply.code(404).send({ message: "Usuário não encontrado" });
  }

  return user;
}

async function createUser(request, reply) {
  const user = usersService.createUser(request.body);
  return reply.code(201).send(user);
}

async function updateUser(request, reply) {
  const user = usersService.updateUser(request.params.id, request.body);

  if (!user) {
    return reply.code(404).send({ message: "Usuário não encontrado" });
  }

  return user;
}

async function deleteUser(request, reply) {
  const user = usersService.deleteUser(request.params.id);

  if (!user) {
    return reply.code(404).send({ message: "Usuário não encontrado" });
  }

  return { message: "Usuário deletado com sucesso", user };
}

module.exports = {
  listUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};