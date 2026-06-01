import { useEffect, useState } from "react";

import API from "../../api/axiosConfig";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

function Analytics() {

  const [payments, setPayments] = useState([]);

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {

    fetchData();

  }, []);

  // Fetch Data

  const fetchData = async () => {

    try {

      const payRes = await API.get("/payments");

      const comRes = await API.get("/complaints");

      setPayments(payRes.data);

      setComplaints(comRes.data);

    } catch (error) {

      console.log(error);
    }
  };

  // Revenue Calculation

  const totalRevenue = payments

    .filter((p) => p.status === "PAID")

    .reduce((sum, p) => sum + p.amount, 0);

  // Complaint Stats

  const openComplaints = complaints.filter(

    (c) => c.status === "OPENED"

  ).length;

  const closedComplaints = complaints.filter(

    (c) => c.status === "CLOSED"

  ).length;

  // Chart Data

  const chartData = [

    {
      name: "Revenue",
      value: totalRevenue
    }
  ];

  const complaintData = [

    {
      name: "Open",
      value: openComplaints
    },

    {
      name: "Closed",
      value: closedComplaints
    }
  ];

  // Colors

  const COLORS = [

    "#2563eb",
    "#16a34a",
    "#dc2626"
  ];

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-gray-800">

            📊 Society Analytics

          </h1>

          <p className="text-gray-500 mt-2">

            Smart Society analytics and insights dashboard

          </p>

        </div>

      </div>

      {/* Top Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Revenue */}

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-lg">

                Total Revenue

              </p>

              <h2 className="text-4xl font-bold text-blue-600 mt-3">

                ₹{totalRevenue}

              </h2>

            </div>

           
          </div>

        </div>

        {/* Open Complaints */}

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-lg">

                Open Complaints

              </p>

              <h2 className="text-4xl font-bold text-red-500 mt-3">

                {openComplaints}

              </h2>

            </div>

            

          </div>

        </div>

        {/* Closed Complaints */}

        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-lg">

                Closed Complaints

              </p>

              <h2 className="text-4xl font-bold text-green-600 mt-3">

                {closedComplaints}

              </h2>

            </div>

            

          </div>

        </div>

      </div>

      {/* Charts Section */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        {/* Revenue Chart */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-gray-700">

              Revenue Overview

            </h2>

            <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold">

              Monthly Revenue

            </div>

          </div>

          <ResponsiveContainer width="100%" height={420}>

            <BarChart data={chartData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="value"
                fill="#2563eb"
                radius={[12, 12, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Complaint Pie Chart */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-gray-700">

              Complaint Status

            </h2>

            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-xl text-sm font-semibold">

              Complaint Analysis

            </div>

          </div>

          <ResponsiveContainer width="100%" height={420}>

            <PieChart>

              <Pie
                data={complaintData}
                dataKey="value"
                nameKey="name"
                outerRadius={140}
                innerRadius={70}
                paddingAngle={5}
                label
              >

                {complaintData.map((entry, index) => (

                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Payment Summary */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-gray-700 mb-6">

            Payment Summary

          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center border-b pb-4">

              <span className="text-gray-600">

                Total Payments

              </span>

              <span className="font-bold text-blue-600">

                {payments.length}

              </span>

            </div>

            <div className="flex justify-between items-center border-b pb-4">

              <span className="text-gray-600">

                Paid Payments

              </span>

              <span className="font-bold text-green-600">

                {
                  payments.filter(
                    (p) => p.status === "PAID"
                  ).length
                }

              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-gray-600">

                Pending Payments

              </span>

              <span className="font-bold text-red-500">

                {
                  payments.filter(
                    (p) => p.status === "PENDING"
                  ).length
                }

              </span>

            </div>

          </div>

        </div>

        {/* Complaint Summary */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-gray-700 mb-6">

            Complaint Summary

          </h2>

          <div className="space-y-5">

            <div className="flex justify-between items-center border-b pb-4">

              <span className="text-gray-600">

                Total Complaints

              </span>

              <span className="font-bold text-blue-600">

                {complaints.length}

              </span>

            </div>

            <div className="flex justify-between items-center border-b pb-4">

              <span className="text-gray-600">

                Open Complaints

              </span>

              <span className="font-bold text-red-500">

                {openComplaints}

              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="text-gray-600">

                Closed Complaints

              </span>

              <span className="font-bold text-green-600">

                {closedComplaints}

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;