const categoryModel = require("../../models/category");

exports.create = async (req, res) => {
  const { title } = req.body;

  const newCategory = await categoryModel.create({ title });

  return res.status(201).json(newCategory);
};
