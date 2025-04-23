const { default: mongoose } = require("mongoose");
const { LocationSchema } = require("./fleet.model");

const tripSchema = new mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fleet",
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DeliveryJob",
        required: true
    },
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
    wayPoints: [{
        location: {
            type: LocationSchema,
            required: true
        },
        distance: {
            type: Number,
            required: true
        },
        duration: {
            type: String,
            required: true
        }
    }],
    plannedRoute: {
        location: {
            type: LocationSchema,
            required: true
        },
        distance: {
            type: Number,
            required: true
        },
        duration: {
            type: String,
            required: true
        }
    },
    actualRoute: {
        location: {
            type: LocationSchema,
            required: true
        },
        distance: {
            type: Number,
            required: true
        },
        duration: {
            type: String,
            required: true
        }
    }
}, { timestamps: true })

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;