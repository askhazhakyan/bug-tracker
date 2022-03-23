const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  user: { type: String, required: true },
  priority: { type: String, required: true },
  description: { type: String, required: true },
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
