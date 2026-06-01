import { useEffect, useState } from "react";
import axios from "axios";

function ActivityLogs() {

  const [logs, setLogs] = useState([]);

  useEffect(() => {

    fetchLogs();

  }, []);

  const fetchLogs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/logs"
      );

      setLogs(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8">

      {/* HEADER */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">

          Activity Logs

        </h1>

        <p className="text-gray-500 mt-2">

          Track all user activities and system updates

        </p>

      </div>

      {/* TABLE */}

      <div className="overflow-x-auto rounded-2xl border border-gray-200">

        <table className="w-full text-sm text-left">

          {/* TABLE HEADER */}

          <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

            <tr>

              <th className="px-6 py-4 font-semibold">

                ID

              </th>

              <th className="px-6 py-4 font-semibold">

                User

              </th>

              <th className="px-6 py-4 font-semibold">

                Action

              </th>

              <th className="px-6 py-4 font-semibold">

                Module

              </th>

              <th className="px-6 py-4 font-semibold">

                Time

              </th>

            </tr>

          </thead>

          {/* TABLE BODY */}

          <tbody>

            {logs.map((log) => (

              <tr
                key={log.id}
                className="border-b hover:bg-blue-50 transition duration-200"
              >

                {/* ID */}

                <td className="px-6 py-4 font-medium text-gray-700">

                  #{log.id}

                </td>

                {/* USER */}

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">

                      {log.username?.charAt(0)}

                    </div>

                    <span className="font-medium text-gray-800">

                      {log.username}

                    </span>

                  </div>

                </td>

                {/* ACTION */}

                <td className="px-6 py-4">

                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold">

                    {log.action}

                  </span>

                </td>

                {/* MODULE */}

                <td className="px-6 py-4">

                  <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-xs font-semibold">

                    {log.moduleName}

                  </span>

                </td>

                {/* TIME */}

                <td className="px-6 py-4 text-gray-600">

                  {new Date(log.createdAt).toLocaleString()}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* EMPTY STATE */}

      {logs.length === 0 && (

        <div className="text-center py-10 text-gray-500">

          No activity logs found

        </div>

      )}

    </div>
  );
}

export default ActivityLogs;