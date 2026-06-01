import { useEffect, useState } from "react";
import axios from "axios";

function Reminders() {

  const [reminders, setReminders] =
    useState([]);

  const [formData, setFormData] =
    useState({

      title: "",
      message: "",
      reminderDate: "",
      completed: false
    });

  useEffect(() => {

    fetchReminders();

  }, []);

  // Fetch Reminders

  const fetchReminders = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/reminders"
      );

      setReminders(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  // Handle Input

  const handleChange = (e) => {

    const { name, value, type, checked } =
      e.target;

    setFormData({

      ...formData,

      [name]:
        type === "checkbox"
          ? checked
          : value
    });
  };

  // Submit Reminder

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/reminders",
        formData
      );

      alert("Reminder Added Successfully");

      setFormData({

        title: "",
        message: "",
        reminderDate: "",
        completed: false
      });

      fetchReminders();

    } catch (error) {

      console.log(error);
    }
  };

  // Delete Reminder

  const deleteReminder = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/api/reminders/${id}`
      );

      fetchReminders();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-gray-800">

          ⏰ Maintenance Reminders

        </h1>

        <p className="text-gray-500 mt-2">

          Manage and track maintenance reminders

        </p>

      </div>

      {/* Form Section */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-gray-700 mb-6">

          Add Reminder

        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {/* Title */}

          <input
            type="text"
            name="title"
            placeholder="Reminder Title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Date */}

          <input
            type="date"
            name="reminderDate"
            value={formData.reminderDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Message */}

          <textarea
            name="message"
            placeholder="Reminder Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="md:col-span-2 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Checkbox */}

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
              className="w-5 h-5"
            />

            <label className="text-gray-700 font-medium">

              Mark as Completed

            </label>

          </div>

          {/* Button */}

          <div className="md:col-span-2">

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition"
            >

              Add Reminder

            </button>

          </div>

        </form>

      </div>

      {/* Table Section */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-gray-700">

            Reminder List

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
                  Title
                </th>

                <th className="w-80 px-4 py-4 text-left">
                  Message
                </th>

                <th className="w-40 px-4 py-4 text-center">
                  Date
                </th>

                <th className="w-32 px-4 py-4 text-center">
                  Status
                </th>

                <th className="w-40 px-4 py-4 text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {reminders.map((reminder) => (

                <tr
                  key={reminder.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-4 py-4">

                    #{reminder.id}

                  </td>

                  <td className="px-4 py-4 font-medium break-words">

                    {reminder.title}

                  </td>

                  <td className="px-4 py-4 text-gray-600 break-words">

                    {reminder.message}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {reminder.reminderDate}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {reminder.completed ? (

                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">

                        Completed

                      </span>

                    ) : (

                      <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-semibold">

                        Pending

                      </span>

                    )}

                  </td>

                  <td className="px-4 py-4">

                    <div className="flex justify-center">

                      <button
                        onClick={() =>
                          deleteReminder(reminder.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
                      >

                        Delete

                      </button>

                    </div>

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

export default Reminders;