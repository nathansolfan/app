let users = [];

const registerUser = (name, password) => {
  if (users.some((user) => user.name === name)) {
    return { success: false, message: "Username already taken" };
  }

  users.push({ name, password });
  return { success: true, message: "User registrou correctly" };
};

const loginUser = (name, password) => {
    const user = users.find(user => user.name === name && user.password === password)
    if(){
        
    }
};

module.exports = { registerUser, loginUser };
