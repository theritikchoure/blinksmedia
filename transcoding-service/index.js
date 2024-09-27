// server.js
require("dotenv").config(); // Load environment variables from .env file
const express = require("express");

require('./worker.js')

const apiRoutes = require("./routes/index.route.js");

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to RabbitMQ and Database
require("./config/db.js");


app.get('/', (req, res, next) => {
  res.send('Hello World!')
})

app.use("/api/v1", apiRoutes);

// Start the server
const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
