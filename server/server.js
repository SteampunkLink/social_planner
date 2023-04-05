const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./utils/middleware");
const connectDB = require("./utils/connectDB");
const port = process.env.PORT || 3000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require("./routes/userRoutes");
app.use("/api/user", userRouter);

// todo connect client

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
