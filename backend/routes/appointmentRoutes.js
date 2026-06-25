const express =require("express");
const router=express.Router();
const {createAppointment,getAppointmentsByEmail, deleteAppointment}=require("../controllers/appointmentController");

router.post("/",createAppointment);
router.get("/:email",getAppointmentsByEmail);
router.delete("/:id",deleteAppointment);
module.exports=router;
