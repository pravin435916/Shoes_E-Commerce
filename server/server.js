const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/ProductRoutes');
const LoginRoutes = require('./routes/LoginRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const DB = 'mongodb+srv://pravinnandankar03:piyu916@cluster0.bpci2y3.mongodb.net/e-commerce';
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(productRoutes);
app.use(LoginRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
