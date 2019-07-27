const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    birth_date: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'OTHER'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model('User', UserSchema);
