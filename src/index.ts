import dotenv from "dotenv";
import connectDB from "./db/index";
import { app } from "./app";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
    app.on("error", (err) => {
      console.log("ERROR: ", err);
      throw err;
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !! ", err);
  });
