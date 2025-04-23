const { default: mongoose } = require("mongoose");
const { LocationSchema } = require("./fleet.model");

const tripSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Fleet",
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Delivery",
        required: true
    },
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Vehicle",
        required: true
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    estimatedDistance: {
        type: Number,
        required: true
    },
    estimatedTime: {
        type: String,
        required: true
    },
    stopDuration: {
        type: String,
        required: true
    },
    fuelUsage: {
        type: String,
        required: true
    },
    trafficDelays: {
        type: String,
        required: true
    },
    wayPoints: [LocationSchema],
    plannedRoute: [LocationSchema],
    actualRoute: [LocationSchema],
},{timestamps: true})

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;