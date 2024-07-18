global.__basedir = __dirname;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const paymentsRouter = require(path.join(__dirname, 'routes', 'payments'));
app.use('/payments', paymentsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
