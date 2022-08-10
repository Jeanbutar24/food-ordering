import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const {
    body,
    method,
    query: { id },
  } = req;

  dbConnect();
  // GET Method
  if (method === "GET") {
    try {
      // let payload = body;
      // if (payload.category) {
      //   let category = await Category.findOne({
      //     name: { $regex: payload.category, $option: "i" },
      //   });
      //   if (category) {
      //     payload = { ...payload, category: category._id };
      //   } else {
      //     delete payload.category;
      //   }
      // }
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // PUT Method
  if (method === "PUT") {
    // let payload = body;
    // if (payload.category) {
    //   let category = await Category.findOne({
    //     name: { $regex: payload.category, $option: "i" },
    //   });
    //   if (category) {
    //     payload = { ...payload, category: category._id };
    //   } else {
    //     delete payload.category;
    //   }
    // }
    try {
      const updateProduct = await Product.findByIdAndUpdate(
        id,
        {
          $set: body,
        },
        { new: true }
      );

      res.json(updateProduct);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  // DELETE Method
  if (method === "DELETE") {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);

      res.json({
        messege: `${deletedProduct.title} has been deleted`,
      });
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

export default handler;
