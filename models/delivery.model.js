const mongoose = require("mongoose");
const { LocationSchema } = require("./fleet.model");
const { DELIVERY_STATUS } = require("../constant");

const deliverySchema = new mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true,
  },
  metadata: {
    recurring: {
      type: Boolean,
      required: true,
    },
    scheduled: {
      type: String,
      required: true,
    },
    isAdHoc: {
      type: Boolean,
      required: true,
    },
    incentives: {
      type: Number,
    },
    status: {
      type: String,
      enum: DELIVERY_STATUS,
      required: true,
    },
    pickupPoint: LocationSchema,
    deliveryLocations: [LocationSchema],
  },
  cargoDetails: {
    dimensions: {
      type: String,
      required: true,
    },
    isFragile: {
      type: Boolean,
    },
    isHandlingRequired: {
      type: Boolean,
    },
  },
}, { timestamps: true });

const DeliveryJob = mongoose.model("DeliveryJob", deliverySchema);

module.exports = DeliveryJob;