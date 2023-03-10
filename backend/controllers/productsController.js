const db = require('../config/db');

const getAllProducts = async (req, res) => {
  const query = 'SELECT * FROM products';
  try {
    const [result] = await db.query(query);
    for (product of result) {
      product.images = JSON.parse(product.images);
    }
    res.json(result);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM products WHERE _id=?';
  try {
    const [result] = await db.query(query, [id]);
    let data = result[0];
    data.images = JSON.parse(data.images);
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { getAllProducts, getProduct };
