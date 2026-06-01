import { useEffect, useState } from "react";
import axios from "axios";

function Emergency() {

  const [alerts, setAlerts] = useState([]);

  const [formData, setFormData] = useState({

    residentName: "",
    blockName: "",
    emergencyType: ""
  });

  useEffect(() => {

    fetchAlerts();

  }, []);

  // GET ALL ALERTS

  const fetchAlerts = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8080/api/emergency"
      );

      setAlerts(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  // INPUT CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  // POST ALERT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/emergency",
        formData
      );

      alert("Emergency Alert Sent");

      setFormData({

        residentName: "",
        blockName: "",
        emergencyType: ""
      });

      fetchAlerts();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6 text-red-600">

        🚨 Emergency SOS

      </h1>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-8"
      >

        {/* Resident Name */}

        <input
          type="text"
          name="residentName"
          value={formData.residentName}
          onChange={handleChange}
          placeholder="Resident Name"
          className="w-full border p-3 rounded mb-4"
          required
        />

        {/* Block Name */}

        <input
          type="text"
          name="blockName"
          value={formData.blockName}
          onChange={handleChange}
          placeholder="Block Name"
          className="w-full border p-3 rounded mb-4"
          required
        />

        {/* Emergency Type */}

        <select
          name="emergencyType"
          value={formData.emergencyType}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        >

          <option value="">
            Select Emergency Type
          </option>

          <option value="Medical">
            Medical
          </option>

          <option value="Fire">
            Fire
          </option>

          <option value="Theft">
            Theft
          </option>

          <option value="Other">
            Other
          </option>

        </select>

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
        >

          Send SOS

        </button>

      </form>

      {/* ALERT LIST */}

      <div className="grid gap-4">

        {alerts.map((alert) => (

          <div
            key={alert.id}
            className="bg-white p-5 rounded shadow border-l-4 border-red-500"
          >

            <h2 className="text-xl font-bold text-red-600">

              {alert.residentName}

            </h2>

            <p className="text-gray-700">

              Block: {alert.blockName}

            </p>

            <p className="text-gray-700">

              Type: {alert.emergencyType}

            </p>

            <p className="text-gray-500 text-sm">

              {alert.createdAt}

            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Emergency;