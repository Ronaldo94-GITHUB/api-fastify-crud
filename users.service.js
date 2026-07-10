const users = require("../database/users");

function listUsers() {
  return users;
}

function createUser(data) {
  const user = {
    id: users.length + 1,
    name: data.name,
    email: data.email
  };

  users.push(user);
  return user;
}

function updateUser(id, data) {
  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return null;
  }

  user.name = data.name ?? user.name;
  user.email = data.email ?? user.email;

  return user;
}

function deleteUser(id) {
  const index = users.findIndex((user) => user.id === Number(id));

  if (index === -1) {
    return null;
  }

  const deletedUser = users.splice(index, 1);

  return deletedUser[0];
}

function findUserById(id) {
  return users.find((user) => user.id === Number(id)) || null;
}

module.exports = {
  listUsers,
  createUser,
  updateUser,
  deleteUser,
  findUserById
};