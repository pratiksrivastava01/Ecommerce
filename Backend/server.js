import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./Config/database.js";

dotenv.config({ path: "./Backend/Config/config.env" });

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} ...`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
