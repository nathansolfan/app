let users = [];
// R E G I S T E R
const registerUser = (name, password) => {
  if (users.some((user) => user.name === name)) {
    return { success: false, message: "Username already taken" };
  }

  users.push({ name, password });
  return { success: true, message: "User registrou correctly" };
};
//  L O G I N
const loginUser = (name, password) => {
  const user = users.find(
    (user) => user.name === name && user.password === password
  );
  if (user) {
    return { success: true, message: "Login OK" };
  } else {
    return { success: false, message: "Wrong stuff" };
  }
};

module.exports = { registerUser, loginUser };
