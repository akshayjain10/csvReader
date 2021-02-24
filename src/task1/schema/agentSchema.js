const mongoose = require("mongoose");

const { Schema } = mongoose;

const agentSchema = new Schema(
  {
    id: Schema.ObjectId,
    agent: { type: String, unique: true },
    status: {
      type: String,
      enum: ["ACTIVE", "PAST"],
      required: true,
      default: "ACTIVE",
    },
    createdDate: {
      type: Number,
      required: true,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("agentDetails", agentSchema, "AgentDetails");
