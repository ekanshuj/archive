const mongoose = require('mongoose');

const messageModel = mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  data: { type: 'String', trim: true },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
  // receiver: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Message', messageModel);