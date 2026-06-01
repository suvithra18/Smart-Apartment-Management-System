import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.clear();

    navigate("/");
  };

  return (

    <div className="h-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 flex items-center justify-between shadow-md">

      {/* Left Title */}

      <div className="flex items-center gap-3">

        {/* LOGO IMAGE */}

        <img
          src={logo}
          alt="Smart Society"
          className="w-10 h-10 rounded-lg object-cover bg-white p-1"
        />

        <h1 className="text-l font-bold tracking-wide">

          Smart Society Management System

        </h1>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-4">

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl font-medium transition"
        >

          Logout

        </button>

      </div>

    </div>
  );
}

export default Navbar;