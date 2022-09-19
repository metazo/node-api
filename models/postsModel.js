const mongoose = require("mongoose");

const postsModel = mongoose.model(
  "nodeapi",
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "posts"
);

module.exports = ( postsModel );