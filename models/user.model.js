const { default: mongoose } = require("mongoose");
const { ROLES } = require("../constant");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [ROLES.ADMIN, ROLES.USER, ROLES.DRIVER,ROLES.DISPATCHER],
        default: ROLES.USER
    }
},{timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;