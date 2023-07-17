const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
const courseSchema = require('./courseSchema');


const reservationSchema = new Schema({
    timeSlot: {type: String},
    date: { type: Date },
    cart: { type: Boolean },
    size: { type: Number},
    course: [courseSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    userName: String,
    userAvatar: String,
    roundLength: {type: Number,
        enum: [9,18],
        default: 18
    },
    price: {type: Number}
  }, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  });

  // Compile the schema into a model and export it
  module.exports = mongoose.model('Reservation', reservationSchema);
