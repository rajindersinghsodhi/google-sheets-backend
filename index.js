const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes.js');


dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API Routing
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
