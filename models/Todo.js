const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  task:{
    type: String,
    required: true
  },
  done:{
    type: Boolean,
    default: false
  }
}, {timestamps: true})

module.exports = new mongoose.model('Todo', todoSchema)