const mongoose = require("mongoose");
const config = require('../utils/config');

const connectToDB = () => {
  mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
    .then(() => {
      console.log("successfully connected to MongoDB");
    })
    .catch((error) => {
      console.log("There was an error connecting to MongoDB: ", error.message);
    })
}

const conn = mongoose.connection;

// Init gfs
const gfs = { grid: undefined };

conn.once("open", () => {
  // Init gfs stream
  console.log("gridfs online")
  gfs.grid = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  })
})


module.exports = { connectToDB, gfs, conn };