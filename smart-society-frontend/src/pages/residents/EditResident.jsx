import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import {
  getResidentById,
  updateResident,
} from "../../services/residentService";

function EditResident() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    flatNumber: "",
    blockName: "",
    phone: "",
  });

  // FETCH RESIDENT DATA
  useEffect(() => {
    fetchResident();
  }, []);

  const fetchResident = async () => {

    try {

      const res = await getResidentById(id);

      setFormData(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  // INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE RESIDENT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await updateResident(id, formData);

      alert("Resident updated successfully");

      navigate("/dashboard/residents");

    } catch (err) {

      console.log(err);

      alert("Update failed");
    }
  };

  return (

    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

      <h1 className="text-3xl font-bold mb-6">
        Edit Resident
      </h1>

      <form onSubmit={handleSubmit}>

        {/* Flat Number */}
        <div className="mb-4">

          <label className="block mb-1">
            Flat Number
          </label>

          <input
            type="text"
            name="flatNumber"
            value={formData.flatNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

        </div>

        {/* Block */}
        <div className="mb-4">

          <label className="block mb-1">
            Block Name
          </label>

          <input
            type="text"
            name="blockName"
            value={formData.blockName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

        </div>

        {/* Phone */}
        <div className="mb-4">

          <label className="block mb-1">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Update Resident
        </button>

      </form>

    </div>
  );
}

export default EditResident;