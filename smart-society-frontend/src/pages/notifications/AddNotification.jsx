import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddNotification() {

  const navigate = useNavigate();

  const [notification, setNotification] = useState({

    title: "",
    message: "",
    type: "General",
    status: "Active"

  });

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {

    setNotification({

      ...notification,
      [e.target.name]: e.target.value

    });
  };

  // ================= HANDLE SUBMIT =================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/notifications",
        notification
      );

      alert("Notification Added Successfully");

      navigate("/dashboard/notifications");

    } catch (error) {

      console.log(error);

      alert("Failed to add notification");
    }
  };

  return (

    <div className="bg-white p-8 rounded-3xl shadow-lg">

      <h1 className="text-3xl font-bold mb-6">

        Add Notification

      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* TITLE */}

        <div>

          <label className="block mb-2 font-medium">

            Title

          </label>

          <input
            type="text"
            name="title"
            value={notification.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="w-full border rounded-xl px-4 py-3"
            required
          />

        </div>

        {/* MESSAGE */}

        <div>

          <label className="block mb-2 font-medium">

            Message

          </label>

          <textarea
            rows="5"
            name="message"
            value={notification.message}
            onChange={handleChange}
            placeholder="Enter message"
            className="w-full border rounded-xl px-4 py-3"
            required
          />

        </div>

        {/* TYPE */}

        <div>

          <label className="block mb-2 font-medium">

            Type

          </label>

          <select
            name="type"
            value={notification.type}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          >

            <option>
              Emergency
            </option>

            <option>
              General
            </option>

            <option>
              Alert
            </option>

          </select>

        </div>

        {/* STATUS */}

        <div>

          <label className="block mb-2 font-medium">

            Status

          </label>

          <select
            name="status"
            value={notification.status}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          >

            <option>
              Active
            </option>

            <option>
              Inactive
            </option>

          </select>

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >

          Save Notification

        </button>

      </form>

    </div>
  );
}

export default AddNotification;