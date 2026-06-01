import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import Residents from "../pages/residents/Residents";
import Complaints from "../pages/complaints/Complaints";
import Visitors from "../pages/visitors/Visitors";
import Payments from "../pages/payments/Payments";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/residents" element={<Residents />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/visitors" element={<Visitors />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;