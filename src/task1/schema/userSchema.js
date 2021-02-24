const mongoose = require("mongoose");

const { Schema } = mongoose;

const userDetailsSchema = new Schema(
  {
    id: Schema.ObjectId,
    firstname: String,
    dob: String,
    address: String,
    phone: String,
    state: String,
    zip: String,
    city: String,
    email: { type: String, unique: true },
    gender: String,
    userType: String,
    status: {
      type: String,
      enum: ["ACTIVE", "PAST"],
      required: true,
      default: "ACTIVE",
    },
    userAccount: {
      type: Schema.ObjectId,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model(
  "UserDetails",
  userDetailsSchema,
  "userDetails"
);
