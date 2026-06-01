import { useEffect, useState } from "react";
import axios from "axios";

function NoticeBoard() {

  const [notices, setNotices] = useState([]);

  const [formData, setFormData] = useState({

    title: "",
    description: "",
    category: "",
    postedBy: ""
  });

  useEffect(() => {

    fetchNotices();

  }, []);

  // FETCH

  const fetchNotices = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/notices"
      );

      setNotices(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  // INPUT

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  // ADD NOTICE

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/notices",
        formData
      );

      alert("Notice Added Successfully");

      setFormData({
        title: "",
        description: "",
        category: "",
        postedBy: ""
      });

      fetchNotices();

    } catch (error) {

      console.log(error);
    }
  };

  // DELETE

  const deleteNotice = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/api/notices/${id}`
      );

      fetchNotices();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <div>

        <h1 className="text-4xl font-bold">

          📢 Digital Notice Board

        </h1>

        <p className="text-gray-500">

          Manage society announcements

        </p>

      </div>

      {/* FORM */}

      <div className="bg-white p-8 rounded-3xl shadow-lg">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="border p-3 rounded-xl"
          />

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border p-3 rounded-xl"
          />

          <input
            name="postedBy"
            value={formData.postedBy}
            onChange={handleChange}
            placeholder="Posted By"
            className="border p-3 rounded-xl"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="border p-3 rounded-xl md:col-span-2"
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-3 rounded-xl md:col-span-2"
          >

            Add Notice

          </button>

        </div>

      </div>

      {/* TABLE */}

     {/* TABLE */}

<div className="bg-white p-6 rounded-3xl shadow-lg overflow-x-auto">

  <table className="w-full border-collapse">

    <thead>

      <tr className="bg-blue-600 text-white">

        <th className="p-4 text-left">ID</th>

        <th className="p-4 text-left">Title</th>

        <th className="p-4 text-left">Description</th>

        <th className="p-4 text-left">Category</th>

        <th className="p-4 text-left">Posted By</th>

        <th className="p-4 text-left">Created At</th>

        <th className="p-4 text-center">Action</th>

      </tr>

    </thead>

    <tbody>

      {notices.map((n) => (

        <tr
          key={n.id}
          className="border-b hover:bg-gray-50 transition"
        >

          <td className="p-4">{n.id}</td>

          <td className="p-4 font-semibold">{n.title}</td>

          <td className="p-4 max-w-xs truncate">
            {n.description}
          </td>

          <td className="p-4">{n.category}</td>

          <td className="p-4">{n.postedBy}</td>

          <td className="p-4">
            {n.createdAt
              ? new Date(n.createdAt).toLocaleString()
              : "-"}
          </td>

          <td className="p-4 text-center">

            <button
              onClick={() => deleteNotice(n.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
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

export default NoticeBoard;