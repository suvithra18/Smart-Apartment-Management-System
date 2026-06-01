function VisitorTable({ visitors }) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Name</th>
          <th>Phone</th>
          <th>Purpose</th>
        </tr>
      </thead>

      <tbody>
        {visitors.map((v) => (
          <tr key={v.id} className="border-b">
            <td className="p-2">{v.name}</td>
            <td>{v.phone}</td>
            <td>{v.purpose}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VisitorTable;