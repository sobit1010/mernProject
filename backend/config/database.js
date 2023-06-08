
// const dotenv = require("dotenv");
// dotenv.config();

const path=require("path");
require('dotenv').config({path: path.resolve(__dirname, './.env')})

const mongoose = require("mongoose");

const connectDatabase = () => {
 // console.log(process.env.DB_URI)
  mongoose.connect(process.env.DB_URI, {
     useNewUrlParser: true,
    useUnifiedTopology: true,
   useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
