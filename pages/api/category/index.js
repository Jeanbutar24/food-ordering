import dbConnect from "../../../util/mongo";
import Categories from "../../../models/Categories";

const handler = async (req, res) => {
  const { method } = req;
  dbConnect();
  // GET Method
  if (method === "GET") {
    try {
      const categories = await Categories.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // POST Method
  if (method === "POST") {
    try {
      const categories = await Categories.create(req.body);
      res.status(201).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
