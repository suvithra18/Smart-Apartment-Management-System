import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api/axiosConfig";

function VerifyOtp() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        `/visitors/${id}/verify?otp=${otp}`
      );

      if (response.data === true) {

        alert("OTP Verified Successfully");

        navigate("/visitors");

      } else {

        alert("Invalid OTP");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 flex justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >

        <h1 className="text-3xl font-bold mb-6">
          Verify OTP
        </h1>

        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full border p-3 rounded-lg mb-4"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button className="w-full bg-green-600 text-white p-3 rounded-lg">
          Verify OTP
        </button>

      </form>

    </div>
  );
}

export default VerifyOtp;