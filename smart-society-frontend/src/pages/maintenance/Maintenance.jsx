import { useEffect, useState } from "react";

import axios from "axios";

function Maintenance() {

  const [maintenances, setMaintenances] =
    useState([]);

  const [formData, setFormData] =
    useState({

      equipmentName: "",
      complaintCount: "",
      usageHours: "",
      lastMaintenanceDate: ""
    });

  useEffect(() => {

    fetchMaintenances();

  }, []);

  // Fetch Data

  const fetchMaintenances = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/maintenance"
      );

      setMaintenances(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  // Handle Input

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  // Submit

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/maintenance",
        {

          ...formData,

          complaintCount:
            Number(formData.complaintCount),

          usageHours:
            Number(formData.usageHours)
        }
      );

      alert("Maintenance Added Successfully");

      setFormData({

        equipmentName: "",
        complaintCount: "",
        usageHours: "",
        lastMaintenanceDate: ""
      });

      fetchMaintenances();

    } catch (error) {

      console.log(error);
    }
  };

  // Delete

  const deleteMaintenance = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/api/maintenance/${id}`
      );

      fetchMaintenances();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-gray-800">

          🛠 AI Maintenance Prediction

        </h1>

        <p className="text-gray-500 mt-2">

          Predict equipment maintenance using AI logic

        </p>

      </div>

      {/* Form */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-gray-700 mb-6">

          Add Maintenance Record

        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
        >

          <input
            type="text"
            name="equipmentName"
            placeholder="Equipment Name"
            value={formData.equipmentName}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="number"
            name="complaintCount"
            placeholder="Complaint Count"
            value={formData.complaintCount}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="number"
            name="usageHours"
            placeholder="Usage Hours"
            value={formData.usageHours}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="date"
            name="lastMaintenanceDate"
            value={formData.lastMaintenanceDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="md:col-span-2 xl:col-span-4">

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition"
            >

              Add Maintenance

            </button>

          </div>

        </form>

      </div>

      {/* Table */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-gray-700">

            Maintenance Records

          </h2>

        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">

          <table className="w-full table-fixed">

            <thead className="bg-gray-100">

              <tr>

                <th className="w-16 px-4 py-4 text-left">
                  ID
                </th>

                <th className="w-52 px-4 py-4 text-left">
                  Equipment
                </th>

                <th className="w-32 px-4 py-4 text-center">
                  Complaints
                </th>

                <th className="w-36 px-4 py-4 text-center">
                  Usage Hours
                </th>

                <th className="w-44 px-4 py-4 text-center">
                  Last Maintenance
                </th>

                <th className="w-52 px-4 py-4 text-center">
                  AI Prediction
                </th>

                <th className="w-36 px-4 py-4 text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {maintenances.map((m) => (

                <tr
                  key={m.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-4 py-4">

                    #{m.id}

                  </td>

                  <td className="px-4 py-4 font-medium break-words">

                    {m.equipmentName}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {m.complaintCount}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {m.usageHours}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {m.lastMaintenanceDate}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {m.complaintCount > 5
                    || m.usageHours > 1000 ? (

                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">

                        ⚠ Maintenance Required

                      </span>

                    ) : (

                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">

                        ✅ Normal

                      </span>

                    )}

                  </td>

                  <td className="px-4 py-4">

                    <div className="flex justify-center">

                      <button
                        onClick={() =>
                          deleteMaintenance(m.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
                      >

                        Delete

                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Maintenance;