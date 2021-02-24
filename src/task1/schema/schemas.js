const AgentSchema = require("./agentSchema");
const PolicyCarrierSchema = require("./policyCarrierSchema");
const PolicyCategorySchema = require("./policyCategorySchema");
const PolicyInfo = require("./policyInfo");
const UserSchema = require("./userSchema");
const UsersAccountSchema = require("./usersAccountSchema");
const dbUpdate = require("./dbUpdate");

const agentSchema = new dbUpdate(AgentSchema);
const policyCarrierSchema = new dbUpdate(PolicyCarrierSchema);
const policyCategorySchema = new dbUpdate(PolicyCategorySchema);
const policyInfo = new dbUpdate(PolicyInfo);
const userSchema = new dbUpdate(UserSchema);
const usersAccountSchema = new dbUpdate(UsersAccountSchema);

module.exports = {
  agentSchema,
  policyCarrierSchema,
  policyCategorySchema,
  policyInfo,
  userSchema,
  usersAccountSchema,
};
