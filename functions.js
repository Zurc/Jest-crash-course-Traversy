const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: "Choco" };
    user["lastName"] = "Late";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data) // gave us the json data
      .catch(err => "error") // catch any error if there is
};

module.exports = functions;
