import "dotenv/config";
import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middeleware/logger.js";
import errorHandler from "./middeleware/error.js";
import notFound from "./middeleware/notFound.js";

const port = process.env.PORT || 8000;

const app = express();
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middeleware
app.use(logger);

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/api/posts", posts);


// Error middeleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
