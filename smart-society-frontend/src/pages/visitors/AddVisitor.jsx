import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axiosConfig";

function AddVisitor() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    purpose: "",
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

      await API.post("/visitors", formData);

      alert("Visitor Added Successfully");

      navigate("/visitors");

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
          Add Visitor
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Visitor Name"
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

        <input
          type="text"
          name="purpose"
          placeholder="Purpose"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={handleChange}
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Add Visitor
        </button>

      </form>

    </div>
  );
}

export default AddVisitor;