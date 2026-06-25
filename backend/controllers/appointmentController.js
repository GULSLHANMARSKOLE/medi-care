const Appointment=require("../models/Appointment");

const createAppointment=async(req,res)=>{
    try{
        const appointment=await Appointment.create(req.body);
        res.status(201).json({
            message:"Appointment booked successfully",
            appointment,
        });
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};
const getAppointmentsByEmail=async(req,res)=>{
    try{
        const appointments=await Appointment.find({
            patientEmail:req.params.email,
        });
        res.status(200).json(appointments);
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};
const deleteAppointment =async(req,res)=>{
    try{
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"Appointment cancelled successfully",
        });
    }catch(error){
        res.status(500).json({
            message:error.message,
        });
    }
};
module.exports={
    createAppointment,getAppointmentsByEmail,deleteAppointment,
};