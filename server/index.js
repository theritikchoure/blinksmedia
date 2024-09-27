require("dotenv").config();
const express = require("express");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const csrf = require("csurf");
const cookieParser = require("cookie-parser");

require("./config/db");
const redisClient = require("./config/redis");
const apiRoutes = require("./routes/index.route");
const ResponseHandler = require("./utils/responseHandlers");

// Apply rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

const app = express();

// Middleware for Brotli and Gzip compression
app.use(
  compression({
    // Options for compression
    threshold: 0, // Compress all responses
  })
);

// Apply rate limiting
app.use(limiter);

// Middleware
app.use(cookieParser()); // Cookie parser must be before CSRF protection
// app.use(csrf({ cookie: true }));

// Security headers
app.use(helmet());

// Logging
app.use(morgan("dev"));

// Set CSRF token in locals for frontend access
// app.use((req, res, next) => {
//   res.locals.csrfToken = req.csrfToken();
//   next();
// });

// Configure CORS to allow only your frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow credentials like cookies
  })
);

// Body parser
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("BlinksMedia API V7");
});

app.use("/api/v1", apiRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  ResponseHandler.sendErrorResponse(res, 500, "Internal Server Error", {
    error: err.message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
