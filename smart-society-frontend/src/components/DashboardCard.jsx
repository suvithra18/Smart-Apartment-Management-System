function DashboardCard({ title, value, color }) {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="text-gray-600">{title}</h3>
      <h1 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h1>
    </div>
  );
}

export default DashboardCard;