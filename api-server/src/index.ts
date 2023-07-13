import 'reflect-metadata';

import app from './app';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;
const dbConnectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/its_2023_cart';

mongoose.set('debug', true);
mongoose.connect(dbConnectionString)
  .then(_ => {
    console.log('Connected to db');
    app.listen(port, () => {
      console.log('Server listening on port 3000');
    });
  })
  .catch(err => {
    console.error(err);
  })
