const mongoose = require("mongoose");

const Event = mongoose.model(
  "Event",
  new mongoose.Schema({
    title: String,
    location: String,
    file:String,
    published:Boolean
  },
  { timestamps: true }
  )
);

module.exports = Event;
