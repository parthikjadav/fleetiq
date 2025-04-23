const mongoose = require("mongoose");
const { ALERT_TYPES, ALERT_STATUS } = require("../constant");

const alertSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true,
    },
    dispatcherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    location: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: [ALERT_STATUS.PENDING, ALERT_STATUS.IN_PROGRESS, ALERT_STATUS.RESOLVED],
        default: ALERT_STATUS.PENDING,
    },
    message: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    severity: {
        type: String,
        enum: [ALERT_TYPES.INFO,ALERT_TYPES.WARNING,ALERT_TYPES.CRITICAL],
        default: ALERT_TYPES.INFO,
    }
},{timestamps: true});

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;