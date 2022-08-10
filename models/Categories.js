import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      maxlength: [20, "category name cannot more then 20 "],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Categories ||
  mongoose.model("Categories", CategoriesSchema);
