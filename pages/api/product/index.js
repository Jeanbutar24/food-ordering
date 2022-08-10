import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";
import Categories from "../../../models/Categories";

const handler = async (req, res) => {
  const { method, body } = req;
  dbConnect();
  // GET Method
  if (method === "GET") {
    try {
      let { skip = 0, limit = 10 } = req.query;

      if (body.categories) {
        let categories = await Categories.findOne({
          title: { $regex: body.categories, $option: "i" },
        });
        if (categories) {
          body = { ...body, categories: categories._id };
        } else {
          delete body.categories;
        }
      }

      const product = await Product.find()
        .skip(parseInt(skip))
        .limit(parseInt(limit))
        .populate("categories");
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // POST Method
  if (method === "POST") {
    try {
      // let payload = body;
      // if (payload.categories) {
      //   let categories = await Categories.findOne({
      //     title: { $regex: payload.categories, $option: "i" },
      //   });
      //   if (categories) {
      //     payload = { ...payload, categories: categories._id };
      //   } else {
      //     delete payload.categories;
      //   }
      // }

      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
