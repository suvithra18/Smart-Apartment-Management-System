import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axiosConfig";

function AddResident() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    flatNumber: "",
    blockName: "",
    phone: "",
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

      await API.post("/residents", formData);

      alert("Resident Added Successfully");

      // Redirect to residents page
      navigate("/dashboard/residents");

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="p-6 flex justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg"
      >

        <h1 className="text-3xl font-bold mb-6">
          Add Resident
        </h1>

        <input
          type="text"
          name="flatNumber"
          placeholder="Flat Number"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleChange}
        />

        <input
          type="text"
          name="blockName"
          placeholder="Block Name"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleChange}
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Add Resident
        </button>

      </form>

    </div>
  );
}

export default AddResident;