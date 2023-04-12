import express from "express";
import errorMiddleware from "./Middleware/error.js";

const app = express();
app.use(express.json());

// Import all routes
import productRoutes from "./Routes/productRoute.js";
import order from "./Routes/orderRoute.js";

// Use Routes
app.use("/api/v1", productRoutes);
app.use("/api/v1", order)

// Error Handler (Should be last piece of middleware)
app.use(errorMiddleware);

export { app };
