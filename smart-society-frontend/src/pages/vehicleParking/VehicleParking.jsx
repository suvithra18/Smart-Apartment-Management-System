import { useEffect, useState } from "react";

import axios from "axios";

function Vehicles() {

  const [vehicles, setVehicles] =
    useState([]);

  const [formData, setFormData] =
    useState({

      ownerName: "",
      vehicleNumber: "",
      vehicleType: "",
      parkingSlot: ""
    });

  useEffect(() => {

    fetchVehicles();

  }, []);

  // Fetch Vehicles

  const fetchVehicles = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/vehicles"
      );

      setVehicles(res.data);

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

  // Add Vehicle

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/vehicles",
        formData
      );

      alert("Vehicle Added");

      setFormData({

        ownerName: "",
        vehicleNumber: "",
        vehicleType: "",
        parkingSlot: ""
      });

      fetchVehicles();

    } catch (error) {

      console.log(error);
    }
  };

  // Delete Vehicle

  const deleteVehicle = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/api/vehicles/${id}`
      );

      fetchVehicles();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">

        🚗 Vehicle Management

      </h1>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-8"
      >

        <div className="grid grid-cols-2 gap-4">

          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="vehicleNumber"
            placeholder="Vehicle Number"
            value={formData.vehicleNumber}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          >

            <option value="">
              Select Vehicle Type
            </option>

            <option value="Bike">
              Bike
            </option>

            <option value="Car">
              Car
            </option>

            <option value="EV">
              EV
            </option>

          </select>

          <input
            type="text"
            name="parkingSlot"
            placeholder="Parking Slot"
            value={formData.parkingSlot}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

        </div>

        <button
          type="submit"
          className="mt-5 bg-blue-600 text-white px-5 py-2 rounded"
        >

          Add Vehicle

        </button>

      </form>

      {/* Vehicle Table */}

      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-2xl font-semibold mb-4">

          Vehicle List

        </h2>

        <table className="w-full border">

          <thead className="bg-gray-200">

            <tr>

              <th className="border p-3">
                ID
              </th>

              <th className="border p-3">
                Owner
              </th>

              <th className="border p-3">
                Vehicle Number
              </th>

              <th className="border p-3">
                Type
              </th>

              <th className="border p-3">
                Parking Slot
              </th>

              <th className="border p-3">
                Status
              </th>

              <th className="border p-3">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {vehicles.map((vehicle) => (

              <tr key={vehicle.id}>

                <td className="border p-3">
                  {vehicle.id}
                </td>

                <td className="border p-3">
                  {vehicle.ownerName}
                </td>

                <td className="border p-3">
                  {vehicle.vehicleNumber}
                </td>

                <td className="border p-3">
                  {vehicle.vehicleType}
                </td>

                <td className="border p-3">
                  {vehicle.parkingSlot}
                </td>

                <td className="border p-3">

                  <span className="text-green-600 font-bold">

                    Active

                  </span>

                </td>

                <td className="border p-3">

                  <button
                    onClick={() =>
                      deleteVehicle(vehicle.id)
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >

                    Delete

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Vehicles;