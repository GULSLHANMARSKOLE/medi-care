import axios from "axios";
const API_URL="http://localhost:5000/api/appointments"



export const createAppointment=async(AppointmentData)=>{
    const response=await axios.post(API_URL,AppointmentData);
    return response.data;
};

export const getAppointments=async(email)=>{
    const response=await axios.get(`${API_URL}/${email}`);
    return response.data;
};
export const cancelAppointment=async(id)=>{
    const response=await axios.delete(`${API_URL}/${id}`);
    return response.data;
}