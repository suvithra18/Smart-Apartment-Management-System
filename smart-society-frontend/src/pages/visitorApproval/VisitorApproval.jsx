import { useEffect, useState } from "react";
import axios from "axios";

function VisitorApproval() {

  const [visitors, setVisitors] =
    useState([]);

  const [formData, setFormData] =
    useState({

      visitorName: "",
      residentName: "",
      purpose: ""
    });

  const [otpData, setOtpData] =
    useState({

      otp: ""
    });

  useEffect(() => {

    fetchVisitors();

  }, []);

  // Fetch Visitors

  const fetchVisitors = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/visitor-approval"
      );

      setVisitors(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  // Handle Form Input

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  // OTP Input

  const handleOtpChange = (e) => {

    setOtpData({

      ...otpData,

      [e.target.name]: e.target.value
    });
  };

  // Submit Visitor

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/visitor-approval",
        formData
      );

      alert("Visitor Request Created");

      setFormData({

        visitorName: "",
        residentName: "",
        purpose: ""
      });

      fetchVisitors();

    } catch (error) {

      console.log(error);
    }
  };

  // Verify OTP

  const verifyOtp = async (id) => {

    try {

      await axios.post(
        `http://localhost:8080/api/visitor-approval/verify/${id}?otp=${otpData.otp}`
      );

      alert("Visitor Approved");

      setOtpData({

        otp: ""
      });

      fetchVisitors();

    } catch (error) {

      alert("Invalid OTP");
    }
  };

  return (

    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-gray-800">

          👤 OTP Visitor Approval

        </h1>

        <p className="text-gray-500 mt-2">

          Manage visitor approvals with OTP verification

        </p>

      </div>

      {/* Form Section */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-gray-700 mb-6">

          Create Visitor Request

        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {/* Visitor Name */}

          <input
            type="text"
            name="visitorName"
            placeholder="Visitor Name"
            value={formData.visitorName}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Resident Name */}

          <input
            type="text"
            name="residentName"
            placeholder="Resident Name"
            value={formData.residentName}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Purpose */}

          <textarea
            name="purpose"
            placeholder="Purpose"
            value={formData.purpose}
            onChange={handleChange}
            rows="4"
            className="md:col-span-2 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Button */}

          <div className="md:col-span-2">

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition"
            >

              Create Request

            </button>

          </div>

        </form>

      </div>

      {/* Visitor Table */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-gray-700">

            Visitor Approval List

          </h2>

        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">

          <table className="w-full table-fixed">

            <thead className="bg-gray-100">

              <tr>

                <th className="w-16 px-4 py-4 text-left">
                  ID
                </th>

                <th className="w-44 px-4 py-4 text-left">
                  Visitor
                </th>

                <th className="w-44 px-4 py-4 text-left">
                  Resident
                </th>

                <th className="w-60 px-4 py-4 text-left">
                  Purpose
                </th>

                <th className="w-28 px-4 py-4 text-center">
                  OTP
                </th>

                <th className="w-36 px-4 py-4 text-center">
                  Status
                </th>

                <th className="w-72 px-4 py-4 text-center">
                  Verify OTP
                </th>

              </tr>

            </thead>

            <tbody>

              {visitors.map((visitor) => (

                <tr
                  key={visitor.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-4 py-4">

                    #{visitor.id}

                  </td>

                  <td className="px-4 py-4 font-medium break-words">

                    {visitor.visitorName}

                  </td>

                  <td className="px-4 py-4 break-words">

                    {visitor.residentName}

                  </td>

                  <td className="px-4 py-4 text-gray-600 break-words">

                    {visitor.purpose}

                  </td>

                  <td className="px-4 py-4 text-center font-bold text-blue-600">

                    {visitor.otp}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {visitor.approved ? (

                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">

                        ✅ Approved

                      </span>

                    ) : (

                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">

                        ⏳ Pending

                      </span>

                    )}

                  </td>

                  <td className="px-4 py-4">

                    {!visitor.approved ? (

                      <div className="flex items-center justify-center gap-3">

                        <input
                          type="text"
                          name="otp"
                          placeholder="Enter OTP"
                          value={otpData.otp}
                          onChange={handleOtpChange}
                          className="border border-gray-300 rounded-lg px-3 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <button
                          onClick={() =>
                            verifyOtp(visitor.id)
                          }
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                        >

                          Verify

                        </button>

                      </div>

                    ) : (

                      <div className="text-center text-green-600 font-semibold">

                        Visitor Approved

                      </div>

                    )}

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

export default VisitorApproval;