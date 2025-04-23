const mongoose = require("mongoose");
const { ALERT_STATUS, ALERT_SEVERITIES } = require("../constant");

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
    deliveryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DeliveryJob",
    },
    dispatcherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
        enum: [ALERT_SEVERITIES.LOW, ALERT_SEVERITIES.MEDIUM, ALERT_SEVERITIES.HIGH],
        default: ALERT_SEVERITIES.LOW,
    }
},{timestamps: true});

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;