import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axiosConfig";

function Visitors() {

  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {

    try {

      const response = await API.get("/visitors");

      setVisitors(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const generateOtp = async (id) => {

    try {

      await API.post(`/visitors/${id}/otp`);

      alert("OTP Generated Successfully");

      fetchVisitors();

    } catch (error) {

      console.log(error);
    }
  };

  const deleteVisitor = async (id) => {

    try {

      await API.delete(`/visitors/${id}`);

      fetchVisitors();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">

          Visitors Management

        </h1>

        <Link
          to="/add-visitor"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >

          Add Visitor

        </Link>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {visitors.map((visitor) => (

          <div
            key={visitor.id}
            className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition"
          >

            <h2 className="text-2xl font-bold text-blue-700 mb-3">

              {visitor.name}

            </h2>

            <p className="text-gray-700">

              📞 Phone: {visitor.phone}

            </p>

            <p className="text-gray-700">

              🎯 Purpose: {visitor.purpose}

            </p>

            <p className="text-gray-700">

              🏠 Resident: {visitor.resident?.name || "N/A"}

            </p>

            <p className="text-gray-700 mb-3">

              ⏰ Entry Time:{" "}

              {visitor.entryTime
                ? new Date(visitor.entryTime).toLocaleString()
                : "Not Entered"}

            </p>

            <p className="font-semibold mb-4">

              OTP:{" "}

              <span className="text-green-600">

                {visitor.otp || "Not Generated"}

              </span>

            </p>

            {/* Buttons */}

            <div className="flex gap-2 flex-wrap">

              <button
                onClick={() => generateOtp(visitor.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >

                Generate OTP

              </button>

              <Link
                to={`/verify-otp/${visitor.id}`}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >

                Verify OTP

              </Link>

              <button
                onClick={() => deleteVisitor(visitor.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
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

export default Visitors;