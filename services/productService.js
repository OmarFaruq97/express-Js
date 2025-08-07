const pool = require("../models/db");

const getAllProducts = async () => {
  const res = await pool.query("SELECT * FROM products ORDER BY id");
  return res.rows;
};

const getProductById = async (id) => {
  const res = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
  return res.rows[0];
};

const createProduct = async (product) => {
  const { name, price, description } = product;
  const res = await pool.query(
    "INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *",
    [name, price, description]
  );
  return res.rows[0];
};

const updateProduct = async (id, product) => {
  const { name, price, description } = product;
  const res = await pool.query(
    "UPDATE products SET name=$1, price=$2, description=$3 WHERE id=$4 RETURNING *",
    [name, price, description, id]
  );
  return res.rows[0];
};

const deleteProduct = async (id) => {
  await pool.query("DELETE FROM products WHERE id = $1", [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
