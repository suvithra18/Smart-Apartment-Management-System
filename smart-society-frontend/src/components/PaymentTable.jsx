function PaymentTable({ payments }) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Amount</th>
          <th>Month</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {payments.map((p) => (
          <tr key={p.id} className="border-b">
            <td className="p-2">₹{p.amount}</td>
            <td>{p.month}</td>
            <td>{p.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PaymentTable;