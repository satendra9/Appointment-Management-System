import mongoose from "mongoose";

const HospitalSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        age: {
            type: Number,
            required: true
        },

        gender: {
            type: String,
            required: true
        },
        

        appointmentdate: {
            type: Date,
            required: true
        },

        doctor: {
            type: String,
            required: true
        },

        phone: {
            type: Number,
            required: true
        },

        paid: {
            type: String,
            required: false
        },

        pending: {
            type: String,
            required: false
        },
        
        disdate: {
            type: Date,
            required: false
        },

    },
    {
        timestamps: true
    }
)

    export const Hospital = mongoose.model('Hospital', HospitalSchema);

