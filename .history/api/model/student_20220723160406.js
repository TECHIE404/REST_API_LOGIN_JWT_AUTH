const mongoose = require('mongoose');

const sudentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String.require,
    email: String,
    phone: Number,
    gender: String
})

module.exports = mongoose.model('Student', sudentSchema);