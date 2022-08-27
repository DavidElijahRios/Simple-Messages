const { Schema, model } = require('mongoose');
// I will need to bring in messages schema

const messageRoomSchema = new Schema({
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Messages'
        }
    ],
});

const MessageRoom = model('MessageRoom', messageRoomSchema);

module.exports = MessageRoom;