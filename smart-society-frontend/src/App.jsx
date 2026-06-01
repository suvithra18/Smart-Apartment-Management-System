import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

/* Auth */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

/* Layout */
import DashboardLayout from "./layouts/DashboardLayout";

/* Protected Route */
import ProtectedRoute from "./components/ProtectedRoute";

/* Dashboard Pages */
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import ResidentDashboard from "./pages/dashboard/ResidentDashboard";
import SecurityDashboard from "./pages/dashboard/SecurityDashboard";

/* Residents */
import Residents from "./pages/residents/Residents";
import AddResident from "./pages/residents/AddResident";
import EditResident from "./pages/residents/EditResident";

/* Complaints */
import Complaints from "./pages/complaints/Complaints";
import AddComplaint from "./pages/complaints/AddComplaint";
import ComplaintDetails from "./pages/complaints/ComplaintDetails";

/* Visitors */
import Visitors from "./pages/visitors/Visitors";
import AddVisitor from "./pages/visitors/AddVisitor";
import VerifyOtp from "./pages/visitors/VerifyOtp";

/* Payments */
import Payments from "./pages/payments/Payments";
import AddPayment from "./pages/payments/AddPayment";

/* Modules */
import Analytics from "./pages/analytics/Analytics";
import Notices from "./pages/notices/Notices";
import Notifications from "./pages/notifications/Notifications";
import Maintenance from "./pages/maintenance/Maintenance";
import Delivery from "./pages/delivery/Delivery";
import Reputation from "./pages/reputation/Reputation";
import Reminders from "./pages/reminders/Reminders";
import Societies from "./pages/societies/Societies";
import VisitorApproval from "./pages/visitorApproval/VisitorApproval";
import Emergency from "./pages/emergency/Emergency";
import Parking from "./pages/parking/Parking";
import VehicleParking from "./pages/vehicleParking/VehicleParking";
import Vehicles from "./pages/vehicles/Vehicles";
import AddNotification from "./pages/notifications/AddNotification";
import EditNotification from "./pages/notifications/EditNotification";
import ActivityLogs from "./pages/logs/ActivityLogs";
function App() {


  return (

    <BrowserRouter>

      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* ================= DASHBOARD ================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          {/* ================= DASHBOARD HOME ================= */}

          <Route
            index
            element={<AdminDashboard />}
          />

          <Route
            path="resident"
            element={<ResidentDashboard />}
          />

          <Route
            path="security"
            element={<SecurityDashboard />}
          />

          {/* ================= RESIDENTS ================= */}

          <Route
            path="residents"
            element={<Residents />}
          />

          <Route
            path="add-resident"
            element={<AddResident />}
          />

          <Route
            path="edit-resident/:id"
            element={<EditResident />}
          />

          {/* ================= COMPLAINTS ================= */}

          <Route
            path="complaints"
            element={<Complaints />}
          />

          <Route
            path="add-complaint"
            element={<AddComplaint />}
          />

          <Route
            path="complaint/:id"
            element={<ComplaintDetails />}
          />

          {/* ================= VISITORS ================= */}

          <Route
            path="visitors"
            element={<Visitors />}
          />

          <Route
            path="add-visitor"
            element={<AddVisitor />}
          />

          <Route
            path="verify-otp/:id"
            element={<VerifyOtp />}
          />

          {/* ================= PAYMENTS ================= */}

          <Route
            path="payments"
            element={<Payments />}
          />

          <Route
            path="add-payment"
            element={<AddPayment />}
          />

          {/* ================= VEHICLES ================= */}

          <Route
            path="vehicles"
            element={<Vehicles />}
          />

          <Route
            path="parking"
            element={<Parking />}
          />

          <Route
            path="vehicle-parking"
            element={<VehicleParking />}
          />

          {/* ================= MODULES ================= */}

          <Route
            path="analytics"
            element={<Analytics />}
          />

          <Route
            path="notices"
            element={<Notices />}
          />

          <Route
            path="notifications"
            element={<Notifications />}
          />
           <Route
            path="add-notification"
            element={<AddNotification />}
          />
           <Route
           path="edit-notification/:id"
           element={<EditNotification />}
          />
          <Route
          path="activity-logs"
          element={<ActivityLogs />}
          />

          <Route
            path="maintenance"
            element={<Maintenance />}
          />

          <Route
            path="delivery"
            element={<Delivery />}
          />

          <Route
            path="reputation"
            element={<Reputation />}
          />

          <Route
            path="reminders"
            element={<Reminders />}
          />

          <Route
            path="societies"
            element={<Societies />}
          />

          <Route
            path="visitor-approval"
            element={<VisitorApproval />}
          />

          <Route
            path="emergency"
            element={<Emergency />}
          />

        </Route>
   
      </Routes>

    </BrowserRouter>
  );
}

export default App;