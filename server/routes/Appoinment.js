const express = require("express")
const router = express.Router()
const {bookAppointment,getAppointments, cancelAppointment} = require("../controllers/Appoinment")




router.post("/book-appointment", bookAppointment);
router.get("/get-appointment", getAppointments);
router.delete("/cancel-appointment/:appointmentId", cancelAppointment);

module.exports = router;

