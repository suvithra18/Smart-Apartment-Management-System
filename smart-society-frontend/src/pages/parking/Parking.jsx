import { useEffect, useState } from "react";
import axios from "axios";

function Parking() {

  const [parkingSlots, setParkingSlots] = useState([]);

  const [formData, setFormData] = useState({
    slotNumber: "",
    occupied: false,
    vehicleNumber: ""
  });

  useEffect(() => {
    fetchParkingSlots();
  }, []);

  // FETCH
  const fetchParkingSlots = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/parking"
      );
      setParkingSlots(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // INPUT
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/api/parking",
        formData
      );

      alert("Parking Slot Added");

      setFormData({
        slotNumber: "",
        occupied: false,
        vehicleNumber: ""
      });

      fetchParkingSlots();

    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteParking = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/parking/${id}`
      );

      fetchParkingSlots();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        🚗 Smart Parking Management
      </h1>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8"
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            name="slotNumber"
            placeholder="Slot Number"
            value={formData.slotNumber}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="vehicleNumber"
            placeholder="Vehicle Number (Optional)"
            value={formData.vehicleNumber}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              name="occupied"
              checked={formData.occupied}
              onChange={handleChange}
              className="w-5 h-5"
            />

            <label className="font-medium">
              Occupied
            </label>

          </div>

        </div>

        <button
          type="submit"
          className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >

          Add Slot

        </button>

      </form>

      {/* TABLE */}

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-semibold mb-4">
          Parking Slots
        </h2>

        <table className="w-full border">

          <thead className="bg-gray-200">

            <tr>

              <th className="p-3 border">ID</th>
              <th className="p-3 border">Slot</th>
              <th className="p-3 border">Vehicle</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>

            </tr>

          </thead>

          <tbody>

            {parkingSlots.map((slot) => (

              <tr key={slot.id}>

                <td className="p-3 border">
                  {slot.id}
                </td>

                <td className="p-3 border">
                  {slot.slotNumber}
                </td>

                <td className="p-3 border">
                  {slot.vehicleNumber || "-"}
                </td>

                <td className="p-3 border">

                  <span
                    className={
                      slot.occupied
                        ? "text-red-600 font-semibold"
                        : "text-green-600 font-semibold"
                    }
                  >

                    {slot.occupied
                      ? "Occupied"
                      : "Available"}

                  </span>

                </td>

                <td className="p-3 border">

                  <button
                    onClick={() =>
                      deleteParking(slot.id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
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

export default Parking;