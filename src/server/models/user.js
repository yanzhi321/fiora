const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    createTime: { type: Date, default: Date.now, index: true },

    username: {
        type: String,
        trim: true,
        unique: true,
        match: /^([0-9a-zA-Z]{1,2}|[\u4e00-\u9eff]){1,8}$/,
        index: true,
    },
    salt: String,
    password: String,
    avatar: {
        type: String,
        default: '',
    },
    groups: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Group',
        },
    ],
    expressions: [
        {
            type: String,
        },
    ],
    pluginData: {
        type: String,
        maxLength: 10240,
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;