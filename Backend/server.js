import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./Config/database.js";
import colors from "colors"

// Handling Uncaugt Error
process.on("uncaughtException", (err) =>{
  console.log(`Error: ${err.message}`.yellow.bold);
  console.log(`Shutting down the server due to unhandled promise rejection`.red.bold);

  server.close(()=>{
    process.exit(1);
  })
})

dotenv.config({ path: "./Backend/Config/config.env" });

connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} ...`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});


// Unhandled Promise REjection
process.on("unhandledRejection", err =>{
  console.log(`Error: ${err.message}`.yellow.bold);
  console.log(`Shutting down the server due to unhandled promise rejection`.red.bold);

  server.close(()=>{
    process.exit(1);
  })
})