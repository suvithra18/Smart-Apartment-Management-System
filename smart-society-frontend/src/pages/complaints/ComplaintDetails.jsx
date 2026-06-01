import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../../api/axiosConfig";

function ComplaintDetails() {

  const { id } = useParams();

  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    fetchComplaint();
  }, []);

  const fetchComplaint = async () => {

    try {

      const response = await API.get(`/complaints/${id}`);

      setComplaint(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  if (!complaint) {

    return (
      <div className="p-6 text-xl">
        Loading...
      </div>
    );
  }

  return (

    <div className="p-6 flex justify-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl border">

        {/* Header */}

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            {complaint.title}
          </h1>

          <Link
            to="/dashboard/complaints"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg"
          >
            Back
          </Link>

        </div>

        {/* Status */}

        <div className="mb-6">

          <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            {complaint.status}
          </span>

        </div>

        {/* Description */}

        <div className="mb-6">

          <h2 className="text-xl font-semibold mb-2">
            Description
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {complaint.description}
          </p>

        </div>

        {/* Category */}

        <div className="mb-6">

          <h2 className="text-xl font-semibold mb-2">
            Category
          </h2>

          <p className="text-gray-700">
            {complaint.category}
          </p>

        </div>

        {/* Complaint ID */}

        <div>

          <h2 className="text-xl font-semibold mb-2">
            Complaint ID
          </h2>

          <p className="text-gray-700">
            #{complaint.id}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ComplaintDetails;