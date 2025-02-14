const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: String, required: true }, 
    time: { type: String, required: true }, 
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
