import api from "../api";
const API_URL = "/api/appointments";



export const createAppointment=async(AppointmentData)=>{
    const response=await api.post(API_URL,AppointmentData);
    return response.data;
};

export const getAppointments=async(email)=>{
    const response=await api.get(`${API_URL}/${email}`);
    return response.data;
};
export const cancelAppointment=async(id)=>{
    const response=await api.delete(`${API_URL}/${id}`);
    return response.data;
}
export const getDoctorAppointments = async (doctorId) => {
  const response = await api.get(`${API_URL}/doctor/${doctorId}`);
  return response.data;
};



