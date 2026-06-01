import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Notifications() {

  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchNotifications();

  }, []);

  // ================= FETCH NOTIFICATIONS =================

  const fetchNotifications = async () => {

    try {

      setLoading(true);

      const res = await axios.get(
        "http://localhost:8080/api/notifications"
      );

      console.log("Notifications API Response:", res.data);

      setNotifications(res.data);

    } catch (error) {

      console.log("Fetch Error:", error);

    } finally {

      setLoading(false);
    }
  };

  // ================= DELETE NOTIFICATION =================

  const deleteNotification = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/api/notifications/${id}`
      );

      fetchNotifications();

    } catch (error) {

      console.log("Delete Error:", error);
    }
  };

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-3xl font-bold text-gray-800">

            Notifications

          </h1>

          <p className="text-gray-500 mt-1">

            Manage society notifications

          </p>

        </div>

        <button
          onClick={() => navigate("/dashboard/add-notification")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow"
        >

          + Add Notification

        </button>

      </div>

      {/* ================= TABLE ================= */}

      <div className="overflow-x-auto rounded-2xl border border-gray-200">

        <table className="w-full text-sm text-left">

          <thead className="bg-gray-100 text-gray-700">

            <tr>

              <th className="px-6 py-4 font-semibold">
                ID
              </th>

              <th className="px-6 py-4 font-semibold">
                Title
              </th>

              <th className="px-6 py-4 font-semibold">
                Message
              </th>

              <th className="px-6 py-4 font-semibold">
                Type
              </th>

              <th className="px-6 py-4 font-semibold">
                Status
              </th>

              <th className="px-6 py-4 font-semibold text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {/* ================= LOADING ================= */}

            {loading ? (

              <tr>

                <td
                  colSpan="6"
                  className="text-center py-10 text-blue-500 font-semibold"
                >

                  Loading notifications...

                </td>

              </tr>

            ) : notifications.length > 0 ? (

              notifications.map((notification) => (

                <tr
                  key={notification.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-4">

                    #{notification.id}

                  </td>

                  <td className="px-6 py-4 font-medium">

                    {notification.title}

                  </td>

                  <td className="px-6 py-4 text-gray-600 max-w-xs">

                    {notification.message}

                  </td>

                  <td className="px-6 py-4">

                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">

                      🚨 {notification.type}

                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">

                      {notification.status}

                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex items-center justify-center gap-3">

                      <button
                        onClick={() =>
                          navigate(
                            `/dashboard/edit-notification/${notification.id}`
                          )
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm"
                      >

                        Edit

                      </button>

                      <button
                        onClick={() =>
                          deleteNotification(notification.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                      >

                        Delete

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              /* ================= EMPTY STATE ================= */

              <tr>

                <td
                  colSpan="6"
                  className="text-center py-10 text-gray-500 font-medium"
                >

                  No notifications found

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Notifications;