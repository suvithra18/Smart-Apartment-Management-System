import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch(
      "http://localhost:8080/api/auth/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    if (response.ok) {

      localStorage.setItem(
        "token",
        data.token
      );

      navigate("/dashboard");

    } else {

      alert("Invalid Credentials");
    }

  } catch (error) {

    console.log(error);
  }
};

  return (

    <div className="h-screen flex overflow-hidden">

      {/* Left Section */}

      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-800 to-indigo-900 text-white items-center justify-center px-12">

        <div>

          <h1 className="text-4xl font-bold leading-tight mb-6">

            Smart Society
            <br />
            Management System

          </h1>

          <p className="text-lg leading-8 text-gray-200">

            AI-powered smart residential
            management platform with
            parking, visitors, maintenance,
            notifications, analytics,
            delivery tracking and security.

          </p>

        </div>

      </div>

      {/* Right Section */}

      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">

        <div className="bg-white w-[400px] p-10 rounded-2xl shadow-2xl">

          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold text-blue-700">

              Welcome Back

            </h2>

          

          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-5">

              <label className="font-semibold block mb-2">

                Email

              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

            </div>

            <div className="mb-6">

              <label className="font-semibold block mb-2">

                Password

              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
            >

              Login

            </button>

          </form>

          <div className="text-center mt-6 text-gray-500">

            Smart Society © 2026

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;