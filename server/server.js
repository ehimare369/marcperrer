// Import all dependencies
import express from "express";

// Import all routers
import router from "./routes/routes.js";

const PORT = 4000 || process.env.PORT;

// Initialize express()
const app = express();

// Set static files directory for css, js and images
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, "../client/public")));

// Set the view directory
app.set("views", "./client/views");

// Set template engine
app.set("view engine", "ejs");

// Routes and middleware
app.use(router);

// Create express server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
