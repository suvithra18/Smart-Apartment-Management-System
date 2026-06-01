import API from "../api/axiosConfig";

export const getAllVisitors = () => {
  return API.get("/visitors");
};

export const addVisitor = (data) => {
  return API.post("/visitors", data);
};

export const generateOtp = (id) => {
  return API.post(`/visitors/${id}/otp`);
};

export const verifyOtp = (id, otp) => {
  return API.post(`/visitors/${id}/verify?otp=${otp}`);
};