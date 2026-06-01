import API from "../api/axiosConfig";

export const getAllPayments = () => {
  return API.get("/payments");
};

export const addPayment = (data) => {
  return API.post("/payments", data);
};

export const getPaymentsByResident = (residentId) => {
  return API.get(`/payments/resident/${residentId}`);
};

export const getTotalRevenue = () => {
  return API.get("/payments/total");
};