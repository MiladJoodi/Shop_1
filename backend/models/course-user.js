const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Types.ObjectId,
      ref: 'Course',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const model = mongoose.model('CourseUser', schema);

module.exports = model;
