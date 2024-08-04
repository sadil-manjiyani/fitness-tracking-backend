
const { knexConnection } = require("./config");

module.exports = {
  development: knexConnection,
  staging: knexConnection,
  production: knexConnection
};
