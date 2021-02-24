const {
  agentSchema,
  policyCarrierSchema,
  policyCategorySchema,
  policyInfo,
  userSchema,
  usersAccountSchema,
} = require("./schema/schemas");

const createOrGetData = async (data, key, Schema) => {
  const { [key]: value } = data;
  const findQuery = { [key]: value };

  let response;
  if (findQuery && value) {
    response = await Schema.findOne(findQuery);
  } else {
    return;
  }

  if (!response) {
    response = await Schema.create(data);
  }

  return response;
};

const updateAgentData = async (data) => {
  return await createOrGetData(data, "agent", agentSchema);
};

const updatePolicyCategoryData = async (data) => {
  return await createOrGetData(data, "category_name", policyCategorySchema);
};

const updatePolicyCarrierData = async (data) => {
  return await createOrGetData(data, "company_name", policyCarrierSchema);
};

const updateUsersAccountData = async (data) => {
  return await createOrGetData(data, "account_name", usersAccountSchema);
};

const updateUserData = async (data) => {
  return await createOrGetData(data, "email", userSchema);
};

const updatePolicyInfoData = async (data) => {
  return await createOrGetData(data, "policy_number", policyInfo);
};

const processData = async (dbData = []) => {
  for (let index = 0; index < dbData.length; index += 1) {
    const element = dbData[index];
    const {
      agent = "",
      userType = "",
      policy_mode = "",
      producer = "",
      policy_number = "",
      premium_amount_written = "",
      premium_amount = "159",
      policy_type = "",
      company_name = "",
      category_name = "",
      policy_start_date = "",
      policy_end_date = "",
      csr = "",
      account_name = "",
      email = "",
      gender = "",
      firstname = "",
      city = "",
      account_type = "",
      phone = "",
      address = "",
      state = "",
      zip = "",
      dob = "",
      primary = "",
      agency_id = "",
    } = element;

    const { _id: agentDataId } = await updateAgentData({ agent });
    const { _id: policyCategoryDataId } = await updatePolicyCategoryData({
      category_name,
    });
    const { _id: policyCarrierDataId } = await updatePolicyCarrierData({
      company_name,
    });
    const { _id: usersAccountDataId } = await updateUsersAccountData({
      account_name,
    });
    const { _id: userDataId } = await updateUserData({
      firstname,
      dob,
      address,
      phone,
      state,
      zip,
      city,
      email,
      gender,
      userType,
      userAccount: usersAccountDataId,
    });
    await updatePolicyInfoData({
      policy_number,
      policy_start_date,
      policy_end_date,
      policy_type,
      premium_amount_written,
      premium_amount,
      policyCategory: policyCategoryDataId,
      policyCarrier: policyCarrierDataId,
      userId: userDataId,
      agentId: agentDataId,
    });

    console.log(" Inserted --> ", index, policy_number);
  }

  return "Data Inserted";
};

module.exports = processData;
