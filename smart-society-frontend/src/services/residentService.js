import API from "../api/axiosConfig";

export const getAllResidents = () => {
  return API.get("/residents");
};

export const getResidentById = (id) => {
  return API.get(`/residents/${id}`);
};

export const addResident = (data) => {
  return API.post("/residents", data);
};

export const updateResident = (id, data) => {
  return API.put(`/residents/${id}`, data);
};

export const deleteResident = (id) => {
  return API.delete(`/residents/${id}`);
};