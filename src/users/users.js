let users = [];

const registerUser = (name, password) => {
  if (users.some((user) => user.name === name)) {
    return { success: false, message: "Username already taken" };
  }
};

const loginUser = (name, password) => {};

module.exports = { registerUser, loginUser };
