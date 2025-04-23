const { default: mongoose } = require("mongoose");
const { LocationSchema } = require("./fleet.model");
const { VEHICLE_STATUS, FUEL_TYPES, VEHICLE_TYPES } = require("../constant");

const vehicleSchema = new mongoose.Schema({
    fleetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fleet",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    type: {
        type: String,
        enum:  VEHICLE_TYPES,
        required: true
    },
    capacity:{
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: [VEHICLE_STATUS.ACTIVE, VEHICLE_STATUS.MAINTENANCE, VEHICLE_STATUS.RETIRED],
        default: VEHICLE_STATUS.ACTIVE
    },
    fuelType: {
        type: String,
        enum:  FUEL_TYPES,
        required: true
    },
    GPSLocation: LocationSchema
}, {timestamps: true})

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;