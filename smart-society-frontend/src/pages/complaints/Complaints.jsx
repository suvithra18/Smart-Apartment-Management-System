import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axiosConfig";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
function Complaints() {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {

    try {

      const response = await API.get("/complaints");

      setComplaints(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {

    try {

      await API.put(`/complaints/${id}?status=${status}`);

      fetchComplaints();

    } catch (error) {
      console.log(error);
    }
  };

  const deleteComplaint = async (id) => {

    try {

      await API.delete(`/complaints/${id}`);

      fetchComplaints();

    } catch (error) {
      console.log(error);
    }
  };

  const exportComplaintsExcel = () => {

  const formattedData = complaints.map((complaint) => ({

    ID: complaint.id,

    Title: complaint.title,

    Description: complaint.description,

    Category: complaint.category,

    Status: complaint.status

  }));

  const worksheet =
    XLSX.utils.json_to_sheet(formattedData);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Complaints"
  );

  const excelBuffer =
    XLSX.write(workbook, {

      bookType: "xlsx",
      type: "array"

    });

  const data = new Blob(
    [excelBuffer],
    {

      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

    }
  );

  saveAs(data, "Complaints.xlsx");
};
  // Status Color Helper

  const getStatusColor = (status) => {

    switch (status) {

      case "OPENED":
        return "bg-blue-100 text-blue-700";

      case "IN_PROGRESS":
        return "bg-yellow-100 text-yellow-700";

      case "RESOLVED":
        return "bg-green-100 text-green-700";

      case "CLOSED":
        return "bg-gray-200 text-gray-700";

      default:
        return "bg-red-100 text-red-600";
    }
  };

  return (

    <div className="p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

  <h1 className="text-3xl font-bold">

    Complaints

  </h1>

  <div className="flex gap-3">

    {/* Export Excel */}

    <button
      onClick={exportComplaintsExcel}
      className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
    >

      Export Excel

    </button>

    {/* Add Complaint */}

    <Link
      to="/dashboard/add-complaint"
      className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
    >

      Add Complaint

    </Link>

  </div>

</div>

      {/* Complaint Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {complaints.map((complaint) => (

          <div
            key={complaint.id}
            className="bg-white shadow-lg rounded-xl p-5 border"
          >

            {/* Title */}

            <h2 className="text-2xl font-bold mb-2">
              {complaint.title}
            </h2>

            {/* Description */}

            <p className="text-gray-700 mb-3">
              {complaint.description}
            </p>

            {/* Status & Category */}

            <div className="flex justify-between items-center mb-4">

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                  complaint.status
                )}`}
              >
                {complaint.status}
              </span>

              <span className="text-sm text-gray-500">
                {complaint.category}
              </span>

            </div>

            {/* Actions */}

            <div className="flex gap-2 flex-wrap">

              <button
                onClick={() =>
                  updateStatus(complaint.id, "OPENED")
                }
                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
              >
                Open
              </button>

              <button
                onClick={() =>
                  updateStatus(complaint.id, "IN_PROGRESS")
                }
                className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600"
              >
                In Progress
              </button>

              <button
                onClick={() =>
                  updateStatus(complaint.id, "RESOLVED")
                }
                className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
              >
                Resolve
              </button>

              <button
                onClick={() =>
                  updateStatus(complaint.id, "CLOSED")
                }
                className="bg-gray-600 text-white px-3 py-2 rounded hover:bg-gray-700"
              >
                Close
              </button>

              <Link
                to={`/dashboard/complaint/${complaint.id}`}
                className="bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700"
              >
                View
              </Link>

              <button
                onClick={() =>
                  deleteComplaint(complaint.id)
                }
                className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Complaints;