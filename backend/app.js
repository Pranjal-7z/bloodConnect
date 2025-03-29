const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const ConnectToDB = require('./db/db');
const userRoutes = require('./routes/user.routes');

ConnectToDB();

const app = express();



const allowedOrigins = ["http://localhost:5173", "http://localhost:5175"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, 
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/', userRoutes); 

module.exports = app;
