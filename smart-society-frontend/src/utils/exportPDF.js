import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportResidentsPDF = (residents) => {

  const doc = new jsPDF();

  doc.text("Residents Report", 14, 15);

  autoTable(doc, {

    head: [["ID", "Name", "Flat", "Phone"]],

    body: residents.map((resident) => [

      resident.id,
      resident.name,
      resident.flatNumber,
      resident.phone

    ])

  });

  doc.save("Residents_Report.pdf");
};