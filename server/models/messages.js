const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    }, 
    timestamps: true,
});

const Messages = model('Messages', messageSchema);

module.exports = Messages;