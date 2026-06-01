import { useEffect, useState } from "react";
import axios from "axios";

function Vehicles() {

  const [vehicles, setVehicles] = useState([]);

  const [form, setForm] = useState({
    ownerName: "",
    vehicleNumber: "",
    vehicleType: ""
  });

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/vehicles"
      );

      setVehicles(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post(
      "http://localhost:8080/api/vehicles",
      form
    );

    setForm({
      ownerName: "",
      vehicleNumber: "",
      vehicleType: ""
    });

    loadVehicles();
  };

  const handleDelete = async (id) => {

    await axios.delete(
      `http://localhost:8080/api/vehicles/${id}`
    );

    loadVehicles();
  };

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">

        🚗 Vehicle Management

      </h1>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-3 gap-4 mb-6"
      >

        <input
          name="ownerName"
          value={form.ownerName}
          onChange={handleChange}
          placeholder="Owner Name"
          className="border p-2"
        />

        <input
          name="vehicleNumber"
          value={form.vehicleNumber}
          onChange={handleChange}
          placeholder="Vehicle Number"
          className="border p-2"
        />

        <select
          name="vehicleType"
          value={form.vehicleType}
          onChange={handleChange}
          className="border p-2"
        >

          <option value="">Type</option>

          <option>Car</option>

          <option>Bike</option>

          <option>EV</option>

        </select>

        <button
          className="bg-blue-600 text-white p-2 col-span-3"
        >

          Add Vehicle

        </button>

      </form>

      {/* TABLE */}

      <table className="w-full border">

        <thead>

          <tr className="bg-gray-200">

            <th>ID</th>

            <th>Owner</th>

            <th>Number</th>

            <th>Type</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {vehicles.map((v) => (

            <tr key={v.id} className="text-center">

              <td>{v.id}</td>

              <td>{v.ownerName}</td>

              <td>{v.vehicleNumber}</td>

              <td>{v.vehicleType}</td>

              <td>

                <button
                  onClick={() => handleDelete(v.id)}
                  className="bg-red-500 text-white px-3 py-1"
                >

                  Delete

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Vehicles;
