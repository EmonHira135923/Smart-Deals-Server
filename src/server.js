import dotenv from "dotenv";
dotenv.config();
import app from "./apps/app.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || "3000";

const startServer = async () => {
  // await connectDB();

  app.listen(port, () => {
    console.log(`Smart Deal Management runnings port ${port}`);
  });
};

startServer();
