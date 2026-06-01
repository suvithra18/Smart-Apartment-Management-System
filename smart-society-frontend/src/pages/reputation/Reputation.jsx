import { useEffect, useState } from "react";
import axios from "axios";

function Reputation() {

  const [scores, setScores] = useState([]);

  const [formData, setFormData] = useState({

    residentName: "",
    paymentScore: "",
    complaintScore: "",
    participationScore: ""
  });

  useEffect(() => {

    fetchScores();

  }, []);

  // Fetch Data

  const fetchScores = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/reputation"
      );

      setScores(res.data);

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

  // Submit

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/reputation",
        {

          ...formData,

          paymentScore:
            Number(formData.paymentScore),

          complaintScore:
            Number(formData.complaintScore),

          participationScore:
            Number(formData.participationScore)
        }
      );

      alert("Reputation Added Successfully");

      setFormData({

        residentName: "",
        paymentScore: "",
        complaintScore: "",
        participationScore: ""
      });

      fetchScores();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-gray-800">

            🏆 Resident Reputation

          </h1>

          <p className="text-gray-500 mt-2">

            Track resident engagement and scores

          </p>

        </div>

      </div>

      {/* Form */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold mb-6 text-gray-700">

          Add Reputation Score

        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
        >

          <input
            type="text"
            name="residentName"
            placeholder="Resident Name"
            value={formData.residentName}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="number"
            name="paymentScore"
            placeholder="Payment Score"
            value={formData.paymentScore}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="number"
            name="complaintScore"
            placeholder="Complaint Score"
            value={formData.complaintScore}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="number"
            name="participationScore"
            placeholder="Participation Score"
            value={formData.participationScore}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="md:col-span-2 xl:col-span-4">

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition"
            >

              Add Score

            </button>

          </div>

        </form>

      </div>

      {/* Table */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold text-gray-700">

            Reputation Score List

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
                  Resident
                </th>

                <th className="w-32 px-4 py-4 text-center">
                  Payment
                </th>

                <th className="w-32 px-4 py-4 text-center">
                  Complaint
                </th>

                <th className="w-40 px-4 py-4 text-center">
                  Participation
                </th>

                <th className="w-32 px-4 py-4 text-center">
                  Total
                </th>

                <th className="w-40 px-4 py-4 text-center">
                  Rank
                </th>

              </tr>

            </thead>

            <tbody>

              {scores.map((score) => (

                <tr
                  key={score.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="px-4 py-4">

                    #{score.id}

                  </td>

                  <td className="px-4 py-4 font-medium break-words">

                    {score.residentName}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {score.paymentScore}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {score.complaintScore}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {score.participationScore}

                  </td>

                  <td className="px-4 py-4 text-center font-bold text-blue-600">

                    {score.totalScore}

                  </td>

                  <td className="px-4 py-4 text-center">

                    {score.totalScore >= 80 ? (

                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">

                        🥇 Excellent

                      </span>

                    ) : score.totalScore >= 60 ? (

                      <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs font-semibold">

                        🥈 Good

                      </span>

                    ) : (

                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">

                        🥉 Average

                      </span>

                    )}

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

export default Reputation;