const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const {
  createData, //  C
  readData, //  R
  updateData, //  U
  deleteData, //  D
} = require("./controllers/apiController");
const PORT = process.env.PORT;

// ===( MIDDLEWARE )=== //
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// ===( API )=== //
app
  .route("/api/data")
  .get(readData)
  .post(createData)
  .put(updateData)
  .delete(deleteData);

// ===( PORT )=== //
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
