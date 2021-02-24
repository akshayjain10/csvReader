const mongoose = require("mongoose");

const { Schema } = mongoose;

const policyCategorySchema = new Schema(
  {
    id: Schema.ObjectId,
    category_name: { type: String, unique: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model(
  "policyCategoryDetails",
  policyCategorySchema,
  "PolicyCategoryDetails"
);
