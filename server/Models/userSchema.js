const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      require,
    },
    password: {
      type: String,
      require,
    },
    address: {
      type: String,
      require,
    },
    numberPhone: {
      type: Number,
      require,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
