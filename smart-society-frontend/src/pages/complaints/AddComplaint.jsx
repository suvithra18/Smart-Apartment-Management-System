import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axiosConfig";

function AddComplaint() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    status: "OPEN",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/complaints", formData);

      alert("Complaint Added Successfully");

      navigate("/dashboard/complaints");

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="p-6 flex justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl"
      >

        <h1 className="text-3xl font-bold mb-6">
          Add Complaint
        </h1>

        {/* Title */}

        <input
          type="text"
          name="title"
          placeholder="Complaint Title"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleChange}
          required
        />

        {/* Description */}

        <textarea
          name="description"
          placeholder="Complaint Description"
          rows="5"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleChange}
          required
        ></textarea>

        {/* Category */}

        <select
          name="category"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleChange}
          required
        >

          <option value="">
            Select Category
          </option>

          <option value="Water">
            Water
          </option>

          <option value="Electricity">
            Electricity
          </option>

          <option value="Security">
            Security
          </option>

          <option value="Maintenance">
            Maintenance
          </option>

        </select>

        {/* Submit */}

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
        >
          Submit Complaint
        </button>

      </form>

    </div>
  );
}

export default AddComplaint;