const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');
require('dotenv').config();

mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.DB_CONNECTION_STRING, { useNewUrlParser: true });

/* Routes */
const game = require("./game/routes");
const asb = require("./asb/routes");
const objective = require("./objective/routes");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());
app.use(cors());

// API routes
app.use('/v2/games/', game)
app.use('/v2/asb/', asb)
app.use('/v2/objectives/', objective)

app.listen(8080);

console.log(`Running on http://${HOST}:${PORT}`);
