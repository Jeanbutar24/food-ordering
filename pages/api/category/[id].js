import dbConnect from "../../../util/mongo";
import Categories from "../../../models/Categories";

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
      const categories = await Categories.findById(id);
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // PUT Method
  if (method === "PUT") {
    try {
      const updateCategories = await Categories.findByIdAndUpdate(
        id,
        {
          $set: body,
        },
        { new: true }
      );

      res.json(updateCategories);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  // DELETE Method
  if (method === "DELETE") {
    try {
      const deletedCategories = await Categories.findByIdAndDelete(id);

      res.json({
        messege: `${deletedCategories.title} has been deleted`,
      });
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

export default handler;
