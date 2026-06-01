import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axiosConfig";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
function Payments() {

  const [payments, setPayments] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {

    fetchPayments();
    fetchTotalAmount();

  }, []);

  const fetchPayments = async () => {

    try {

      const response = await API.get("/payments");

      setPayments(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const fetchTotalAmount = async () => {

    try {

      const response = await API.get("/payments/total");

      setTotalAmount(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {

    try {

      await API.put(`/payments/${id}?status=${status}`);

      fetchPayments();
      fetchTotalAmount();

    } catch (error) {

      console.log(error);
    }
  };

  const deletePayment = async (id) => {

    try {

      await API.delete(`/payments/${id}`);

      fetchPayments();
      fetchTotalAmount();

    } catch (error) {

      console.log(error);
    }
  };
const exportPDF = () => {

  const doc = new jsPDF();

  doc.text("Payments Report", 14, 15);

  autoTable(doc, {

    head: [[
      "ID",
      "Amount",
      "Month",
      "Status"
    ]],

    body: payments.map((payment) => [

      payment.id,
      payment.amount,
      payment.month,
      payment.status

    ])

  });

  doc.save("Payments_Report.pdf");
};
  return (

    <div className="p-6">

     <div className="flex justify-between items-center mb-6">

  <h1 className="text-3xl font-bold">
    Payments
  </h1>

  <div className="flex gap-3">

    <button
      onClick={exportPDF}
      className="bg-red-600 text-white px-5 py-2 rounded-lg"
    >

      Export PDF

    </button>

    <Link
      to="/dashboard/add-payment"
      className="bg-blue-600 text-white px-5 py-2 rounded-lg"
    >

      Add Payment

    </Link>

  </div>

</div>

      <div className="bg-green-100 text-green-700 p-5 rounded-xl mb-6">

        <h2 className="text-2xl font-bold">
          Total Collection: ₹ {totalAmount}
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {payments.map((payment) => (

          <div
            key={payment.id}
            className="bg-white shadow-lg rounded-xl p-5"
          >

            <h2 className="text-2xl font-bold mb-2">
              ₹ {payment.amount}
            </h2>

            <p className="text-gray-700">
              Month: {payment.month}
            </p>

            <p className="text-gray-700 mb-4">
              Status: {payment.status}
            </p>

            <div className="flex gap-3 flex-wrap">

              <button
                onClick={() => updateStatus(payment.id, "PAID")}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Mark Paid
              </button>

              <button
                onClick={() => updateStatus(payment.id, "PENDING")}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Pending
              </button>

              <button
                onClick={() => deletePayment(payment.id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Payments;