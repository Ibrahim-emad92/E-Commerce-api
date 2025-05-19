const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const {dbConnection} = require('./config/database');
const categoryRoute = require('./routes/CategoryRoute');

dotenv.config({ path: 'config.env' });

const app = express();
app.use(express.json());

dbConnection();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}

app.use('/api/v1/categories', categoryRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});