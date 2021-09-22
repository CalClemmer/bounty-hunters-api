import mongoose from "mongoose";

let connectionString;

if (process.env.NODE_ENV === "production") {
  connectionString = process.env.DB_URL;
} else {
  connectionString = process.env.MONGO_URI;
}

mongoose.connection(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log(`connected to MongoDB on ${db.host}:${db.port}`);
});

db.on("error", (error) => {
  console.log("Database error", error);
});

// import models
import Bounty from "./bounty";

export default {
  //models
};
