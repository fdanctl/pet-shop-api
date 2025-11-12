import express from 'express';
import { router as productRoutes } from "./routes/product";
import { router as orderRoutes } from "./routes/order";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
