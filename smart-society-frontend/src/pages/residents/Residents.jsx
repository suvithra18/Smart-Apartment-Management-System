import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axiosConfig";
import { exportResidentsPDF } from "../../utils/exportPDF";
import { exportResidentsExcel} from "../../utils/exportExcel";

function Residents() {

  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = async () => {

    try {

      const response = await API.get("/residents");

      setResidents(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const deleteResident = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resident?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/residents/${id}`);

      alert("Resident deleted successfully");

      fetchResidents();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Residents
        </h1>

        {/* ADD RESIDENT */}

        <Link
          to="/dashboard/add-resident"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Add Resident
        </Link>

      </div>
      <button
  onClick={() => exportResidentsPDF(residents)}
  className="bg-red-500 text-white px-4 py-2 rounded-lg"
>

  Export PDF

</button>
<button
  onClick={() => exportResidentsExcel(residents)}
  className="bg-green-600 text-white px-4 py-2 rounded-lg"
>

  Export Excel

</button>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
       
        <table className="w-full">

          <thead className="bg-gray-200">

            <tr>

              <th className="p-4 text-left">
                Flat
              </th>

              <th className="p-4 text-left">
                Block
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {residents.map((resident) => (

              <tr
                key={resident.id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-4">
                  {resident.flatNumber}
                </td>

                <td className="p-4">
                  {resident.blockName}
                </td>

                <td className="p-4">
                  {resident.phone}
                </td>

                <td className="p-4 flex gap-3 justify-center">

                  {/* EDIT */}

                  <Link
                    to={`/dashboard/edit-resident/${resident.id}`}
                    className="bg-yellow-500 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </Link>

                  {/* DELETE */}

                  <button
                    onClick={() => deleteResident(resident.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Residents;