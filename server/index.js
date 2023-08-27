const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');

const authRouter = require('./routers/authRouter');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParse.json({ limit: '30mb' }));

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api', authRouter);

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('Server is running on Port: ', process.env.PORT);
});
