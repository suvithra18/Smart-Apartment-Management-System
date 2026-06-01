import API from "../api/axiosConfig";

export const getAllComplaints = () => {
  return API.get("/complaints");
};

export const addComplaint = (data) => {
  return API.post("/complaints", data);
};

export const updateComplaintStatus = (id, status) => {
  return API.put(`/complaints/${id}?status=${status}`);
};

export const deleteComplaint = (id) => {
  return API.delete(`/complaints/${id}`);
};