const mongoose = require("mongoose");

const { Schema } = mongoose;

const usersAccountSchema = new Schema(
  {
    id: Schema.ObjectId,
    account_name: { type: String, unique: true },
    status: {
      type: String,
      enum: ["ACTIVE", "CLOSED"],
      required: true,
      default: "ACTIVE",
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model(
  "userAccountDetails",
  usersAccountSchema,
  "UserAccountDetails"
);
