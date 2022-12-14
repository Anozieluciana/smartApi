const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGOOSE_URL1;
console.log(url);
  
mongoose.connect(url).then(() => {
  console.log('Connected to DB');
});

module.exports = mongoose;
