const Appoinment = require("../models/Appoinment")
const moment = require("moment");

/**
 * Book an appointment
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const bookAppointment = async (req, res) => {
    try {
        const { userId, date, time } = req.body; // Get appointment details from request

        // Convert date and time to a proper DateTime format
        const appointmentDateTime = moment(`${date} ${time}`, "YYYY-MM-DD HH:mm");

        // Validate appointment time
        if (!appointmentDateTime.isValid()) {
            return res.status(400).json({ message: "Invalid date or time format." });
        }

        // Ensure appointment is not on Sunday
        if (appointmentDateTime.day() === 0) {
            return res.status(400).json({ message: "Appointments cannot be booked on Sundays." });
        }

        // Ensure appointment is within allowed hours (10 AM to 5 PM)
        const hour = appointmentDateTime.hour();
        if (hour < 10 || hour >= 17) {
            return res.status(400).json({ message: "Appointments can only be booked between 10:00 AM and 5:00 PM." });
        }

        // Check if an appointment already exists at this time
        const existingAppointment = await Appoinment.findOne({ date, time });
        if (existingAppointment) {
            return res.status(400).json({ message: "This appointment slot is already booked." });
        }

        // Ensure 30-minute gap by checking appointments before and after
        const beforeTime = appointmentDateTime.clone().subtract(30, "minutes").format("HH:mm");
        const afterTime = appointmentDateTime.clone().add(30, "minutes").format("HH:mm");

        const conflictingAppointments = await Appoinment.findOne({
            date,
            time: { $in: [beforeTime, afterTime] },
        });

        if (conflictingAppointments) {
            return res.status(400).json({ message: "There must be a 30-minute gap between appointments." });
        }

        // Save the appointment
        const newAppointment = new Appoinment({
            userId,
            date,
            time,
        });

        await newAppointment.save();

        res.status(201).json({ message: "Appointment booked successfully!", appointment: newAppointment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error." });
    }
};





//   Get Appoinmment 

const getAppointments = async (req, res) => {
    try {
        const appointments = await Appoinment.find().sort({ date: 1, time: 1 });
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: "Error fetching appointments." });
    }
};


// cancle appoinmet

const cancelAppointment = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        await Appoinment.findByIdAndDelete(appointmentId);
        res.json({ message: "Appointment canceled successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error canceling appointment." });
    }
};














module.exports = { bookAppointment, getAppointments, cancelAppointment };
