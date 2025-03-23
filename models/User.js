const bcrypt = require("bcryptjs");

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  async setPassword(password) {
    this.password = await bcrypt.hash(password, 10);
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

const users = []; // Simulated Database

module.exports = { User, users };