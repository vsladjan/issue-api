const DataTypes = require("sequelize").DataTypes;
const _issue = require("./issue.cjs");
const _support = require("./support.cjs");
const _user = require("./user.cjs");

function initModels(sequelize) {
  console.log("Init models...")
  const issue = _issue(sequelize, DataTypes);
  const support = _support(sequelize, DataTypes);
  const user = _user(sequelize, DataTypes);

  issue.belongsTo(support, { as: "support", foreignKey: "supportId"});
  support.hasMany(issue, { as: "issues", foreignKey: "supportId"});
  issue.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasMany(issue, { as: "issues", foreignKey: "userId"});

  return {
    issue,
    support,
    user,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
