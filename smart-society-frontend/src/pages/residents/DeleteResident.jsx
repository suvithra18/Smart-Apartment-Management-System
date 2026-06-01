import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { deleteResident } from "../../services/residentService";

function DeleteResident() {

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {

    const removeResident = async () => {

      const confirmDelete = window.confirm(
        "Are you sure you want to delete this resident?"
      );

      if (!confirmDelete) {

        navigate("/dashboard/residents");
        return;
      }

      try {

        await deleteResident(id);

        alert("Resident deleted successfully");

        navigate("/dashboard/residents");

      } catch (error) {

        console.log(error);

        alert("Delete failed");
      }
    };

    removeResident();

  }, [id, navigate]);

  return (

    <div className="p-10">

      <h1 className="text-2xl font-bold">
        Deleting Resident...
      </h1>

    </div>
  );
}

export default DeleteResident;