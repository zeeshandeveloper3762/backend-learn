import "dotenv/config";

import mongoose from "mongoose";
import connectDB from "./db/index.js";
import express from "express";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app listen on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("mongo db connection failed: ", error);
  });

// const app = express();

// app.get("/get-router", (req, res) => {
//   res.send("hello world");
// });
// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   console.log(`app liten on port ${port}`);
// });

// const app = express();

// connectDB();

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("errror", (error) =>{
//             console.log("error", error);
//             throw error

//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`server is listen on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ", error);
//         throw error

//     }
// })()
