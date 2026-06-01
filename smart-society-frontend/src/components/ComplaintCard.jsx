function ComplaintCard({ complaint }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-3">
      <h2 className="font-bold">{complaint.title}</h2>
      <p className="text-gray-600">{complaint.description}</p>
      <p className="text-red-500 font-semibold">
        {complaint.status}
      </p>
    </div>
  );
}

export default ComplaintCard;