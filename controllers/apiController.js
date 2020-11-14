const { pool } = require("../config/db");

module.exports = {
  // ===( GET )=== //
  readData: (req, res) => {
    pool.query(
      "SELECT * FROM my_table;", 
      [], 
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json({ status: 200, data: results.rows });
    });
  },

  // ===( POST )=== //
  createData: (req, res) => {
    const { content } = req.body;
    pool.query(
      "INSERT INTO my_table (content) VALUES ($1);",
      [content],
      (error) => {
        if (error) {
          throw error;
        }
        res
          .status(201)
          .json({ status: 201, message: "Data created successfully." });
      }
    );
  },

  // ===( PUT )=== //
  updateData: (req, res) => {
    const { content, id } = req.body;
    pool.query(
      "UPDATE my_table SET content = $1 WHERE id = $2;",
      [content, id],
      (error) => {
        if (error) {
          throw error;
        }
        res
          .status(200)
          .send({ status: 200, message: `Data updated successfully.`, id: id });
      }
    );
  },

  // ===( DELETE )=== //
  deleteData: (req, res) => {
    const { id } = req.body;
    pool.query(
      "DELETE FROM my_table WHERE id = $1;", 
      [id], 
      (error) => {
      if (error) {
        throw error;
      }
      res
        .status(200)
        .send({ status: 200, message: `Data deleted successfully.`, id: id });
    });
  },
};
