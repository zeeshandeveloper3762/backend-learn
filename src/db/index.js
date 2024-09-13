import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `\n mongodb connected DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongodb connection error ", error);
    process.exit(1);
  }
};

export default connectDB;

// import mongoose from "mongoose";
// import { DB_NAME } from './../constants';
// import { async } from "./index";

// export const async connectDB = () => {
//     try {
//          const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         console.log(`\n mongodb connected !! DB HOST: ${connectionInstance}`)
//     } catch (error) {
//         console.log("mongodb connection error ", error);
//         process.exit(1)
//     }
// }
