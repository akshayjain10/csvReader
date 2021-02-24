const mongoose = require("mongoose");

const { Schema } = mongoose;

const policyInfoSchema = new Schema(
  {
    id: Schema.ObjectId,
    policy_number: { type: String, unique: true },
    policy_start_date: String,
    policy_end_date: String,
    policy_type: String,
    premium_amount_written: String,
    premium_amount: String,
    policyCategory: {
      type: Schema.ObjectId,
    },
    policyCarrier: {
      type: Schema.ObjectId,
    },
    userId: {
      type: Schema.ObjectId,
    },
    agentId: {
      type: Schema.ObjectId,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model(
  "policyInfoDetails",
  policyInfoSchema,
  "PolicyInfoDetails"
);
