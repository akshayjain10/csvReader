const mongoose = require("mongoose");

const { Schema } = mongoose;

const policyCarrierSchema = new Schema(
  {
    id: Schema.ObjectId,
    company_name: { type: String, unique: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model(
  "policyCarrierDetails",
  policyCarrierSchema,
  "PolicyCarrierDetails"
);
