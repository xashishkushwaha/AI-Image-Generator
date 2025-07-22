const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const path = require("path");
const { errorHandler } = require("./middlewares/error");
const verifyToken = require("./middlewares/verifyToken");

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connection successful!"));

app.use(express.json());
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/user", verifyToken, userRoute);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("app is running");
});
