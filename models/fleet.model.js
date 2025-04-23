const { default: mongoose } = require("mongoose");

const LocationSchema = new mongoose.Schema({
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
})

const fleetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dispatcher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    companyInfo: {
        name: {
            type: String,
            required: true
        },
        address: {
            street: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            zip: {
                type: String,
                required: true
            }
        },
        phone: {
            type:Number,
        },
        industry: {
            type: String,
            required: true
        },
        location: LocationSchema,
    },
    
    defaultDeliveryZones: [LocationSchema]
},{timestamps: true})

const Fleet = mongoose.model('Fleet', fleetSchema);

module.exports = { Fleet, LocationSchema };