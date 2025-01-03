const mongoose = require("mongoose")

const Schema = mongoose.Schema;



const paymentSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        address: {
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
        zipCode: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true,
        },
        licensePlateNumber: {
            type: String,
            required: true,
        },
        payAmount: {
            type: String,
            required: true,
        }, 
        parkName: {
            type: String,
            required: true,
        },
        parkingChargeNumber: {
            type: String,
            required: true,
        },
        issue_date: {
            type: String,
            required: true,
        },
    }
)

module.exports = mongoose.model("violationpaymentlogs", paymentSchema)