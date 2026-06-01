import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router-dom";

function DashboardLayout() {

  return (

    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Section */}

      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Navbar */}

        <Navbar />

        {/* Page Content */}

        <main className="flex-1 overflow-y-auto p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;