import mongoose from "mongoose";
const { Schema } = mongoose;
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      maxlength: [20, "title product cannot more then 20 "],
    },
    desc: {
      type: String,
      require: true,
      maxlength: [200, "desc product cannot more then 20 "],
    },
    rating: {
      type: String,
    },
    image: {
      type: String,
      require: true,
    },
    price: {
      type: [Number],
      require: true,
    },
    categories: {
      type: [String],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
