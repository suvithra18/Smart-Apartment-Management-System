import { useEffect, useState } from "react";

import axios from "axios";

function Societies() {

  const [societies, setSocieties] =
    useState([]);

  const [formData, setFormData] =
    useState({

      societyName: "",
      address: "",
      totalBlocks: ""
    });

  useEffect(() => {

    fetchSocieties();

  }, []);

  // Fetch Societies

  const fetchSocieties = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/societies"
      );

      setSocieties(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  // Handle Input

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  // Add Society

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/societies",
        {
          ...formData,
          totalBlocks:
            Number(formData.totalBlocks)
        }
      );

      alert("Society Added");

      setFormData({

        societyName: "",
        address: "",
        totalBlocks: ""
      });

      fetchSocieties();

    } catch (error) {

      console.log(error);
    }
  };

  // Delete Society

  const deleteSociety = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/api/societies/${id}`
      );

      fetchSocieties();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">

        🏢 Multi Society Management

      </h1>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-8"
      >

        <div className="grid grid-cols-2 gap-4">

          <input
            type="text"
            name="societyName"
            placeholder="Society Name"
            value={formData.societyName}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="number"
            name="totalBlocks"
            placeholder="Total Blocks"
            value={formData.totalBlocks}
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

        </div>

        <button
          type="submit"
          className="mt-5 bg-blue-600 text-white px-5 py-2 rounded"
        >

          Add Society

        </button>

      </form>

      {/* Society Table */}

      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-2xl font-semibold mb-4">

          Society List

        </h2>

        <table className="w-full border">

          <thead className="bg-gray-200">

            <tr>

              <th className="border p-3">
                ID
              </th>

              <th className="border p-3">
                Society Name
              </th>

              <th className="border p-3">
                Address
              </th>

              <th className="border p-3">
                Total Blocks
              </th>

              <th className="border p-3">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {societies.map((society) => (

              <tr key={society.id}>

                <td className="border p-3">
                  {society.id}
                </td>

                <td className="border p-3">
                  {society.societyName}
                </td>

                <td className="border p-3">
                  {society.address}
                </td>

                <td className="border p-3">
                  {society.totalBlocks}
                </td>

                <td className="border p-3">

                  <button
                    onClick={() =>
                      deleteSociety(society.id)
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
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

export default Societies;