import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {

  const [data, setData] = useState({
    residents: 0,
    complaints: 0,
    visitors: 0,
    revenue: 0
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
  try {

    const token = localStorage.getItem("token");

    const res = await axios.get(
      "http://localhost:8080/api/dashboard/summary",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setData(res.data);

  } catch (error) {
    console.log("Dashboard API error:", error);
  }
};

  const dashboardCards = [

    {
      title: "Residents",
      value: data.residents,
      icon: "👨‍👩‍👧",
      color: "bg-blue-500"
    },

    {
      title: "Complaints",
      value: data.complaints,
      icon: "📝",
      color: "bg-red-500"
    },

    {
      title: "Visitors",
      value: data.visitors,
      icon: "🚶",
      color: "bg-green-500"
    },

    {
      title: "Revenue",
      value: `₹${data.revenue}`,
      icon: "💰",
      color: "bg-yellow-500"
    }

  ];

  return (

    <div className="space-y-10">

      {/* Header */}

      <div>

        <h1 className="text-5xl font-bold text-gray-800">

          Admin Dashboard

        </h1>

        <p className="text-gray-500 mt-3 text-lg">

          Welcome to Smart Society Management System

        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {dashboardCards.map((card, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 relative overflow-hidden"
          >

            <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white mb-6`}>
              {card.icon}
            </div>

            <h2 className="text-2xl font-semibold text-gray-700">
              {card.title}
            </h2>

            <p className="text-5xl font-bold text-gray-800 mt-5">
              {card.value}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminDashboard;