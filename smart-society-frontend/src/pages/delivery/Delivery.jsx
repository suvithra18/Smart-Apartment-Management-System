import { useEffect, useState } from "react";
import axios from "axios";

function Delivery() {

  const [deliveries, setDeliveries] =
    useState([]);

  const [formData, setFormData] =
    useState({

      deliveryPersonName: "",
      companyName: "",
      residentName: ""
    });

  const [otpData, setOtpData] =
    useState({

      otp: ""
    });

  useEffect(() => {

    fetchDeliveries();

  }, []);

  // Fetch Deliveries

  const fetchDeliveries = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/delivery"
      );

      setDeliveries(res.data);

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

  // Handle OTP Input

  const handleOtpChange = (e) => {

    setOtpData({

      ...otpData,

      [e.target.name]: e.target.value
    });
  };

  // Add Delivery

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/delivery",
        formData
      );

      alert("Delivery Entry Added");

      setFormData({

        deliveryPersonName: "",
        companyName: "",
        residentName: ""
      });

      fetchDeliveries();

    } catch (error) {

      console.log(error);
    }
  };

  // Verify OTP

  const verifyOtp = async (id) => {

    try {

      await axios.post(
        `http://localhost:8080/api/delivery/verify/${id}?otp=${otpData.otp}`
      );

      alert("Delivery Verified");

      setOtpData({

        otp: ""
      });

      fetchDeliveries();

    } catch (error) {

      alert("Invalid OTP");
    }
  };

  return (

    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-gray-800">

          🚚 Smart Delivery Entry

        </h1>

        <p className="text-gray-500 mt-2">

          Manage delivery entries and OTP verification

        </p>

      </div>

      {/* Form Section */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-gray-700 mb-6">

          Add Delivery Entry

        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >

          <input
            type="text"
            name="deliveryPersonName"
            placeholder="Delivery Person Name"
            value={formData.deliveryPersonName}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="residentName"
            placeholder="Resident Name"
            value={formData.residentName}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="md:col-span-2 xl:col-span-3">

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition"
            >

              Add Delivery Entry

            </button>

          </div>

        </form>

      </div>

      {/* Table Section */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-gray-700">

            Delivery Entries

          </h2>

        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">

          <table className="w-full table-fixed">

            <thead className="bg-gray-100">

              <tr>

                <th className="w-16 px-4 py-4 text-left">
                  ID
                </th>

                <th className="w-48 px-4 py-4 text-left">
                  Delivery Person
                </th>

                <th className="w-40 px-4 py-4 text-left">
                  Company
                </th>

                <th className="w-40 px-4 py-4 text-left">
                  Resident
                </th>

                <th className="w-24 px-4 py-4 text-center">
                  OTP
                </th>

                <th className="w-32 px-4 py-4 text-center">
                  Status
                </th>

                <th className="w-64 px-4 py-4 text-center">
                  Verification
                </th>

              </tr>

            </thead>

            <tbody>

              {deliveries.map((delivery) => (

                <tr
                  key={delivery.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-4 py-4">

                    #{delivery.id}

                  </td>

                  <td className="px-4 py-4 break-words font-medium">

                    {delivery.deliveryPersonName}

                  </td>

                  <td className="px-4 py-4 break-words">

                    {delivery.companyName}

                  </td>

                  <td className="px-4 py-4 break-words">

                    {delivery.residentName}

                  </td>

                  <td className="px-4 py-4 text-center font-semibold text-blue-600">

                    {delivery.otp}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {delivery.verified ? (

                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">

                        ✅ Verified

                      </span>

                    ) : (

                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">

                        ❌ Pending

                      </span>

                    )}

                  </td>

                  <td className="px-4 py-4">

                    {!delivery.verified ? (

                      <div className="flex items-center gap-2">

                        <input
                          type="text"
                          name="otp"
                          placeholder="Enter OTP"
                          value={otpData.otp}
                          onChange={handleOtpChange}
                          className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <button
                          onClick={() =>
                            verifyOtp(delivery.id)
                          }
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg whitespace-nowrap"
                        >

                          Verify

                        </button>

                      </div>

                    ) : (

                      <span className="text-green-600 font-semibold">

                        Completed

                      </span>

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

export default Delivery;