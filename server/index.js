const express = require("express");
const connectDB = require("./config/db");
const redisClient = require("./config/redis");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const apiRoutes = require('./routes/index.route');
require("dotenv").config();

const app = express();

// Middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// connectDB();

// Sample route
app.get("/", (req, res) => {
  res.send("BlinksMedia API");
});


app.use("/api/v1", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
