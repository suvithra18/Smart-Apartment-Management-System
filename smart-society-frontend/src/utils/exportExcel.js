import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportResidentsExcel = (residents) => {

  const worksheet =
    XLSX.utils.json_to_sheet(residents);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Residents"
  );

  const excelBuffer =
    XLSX.write(workbook, {

      bookType: "xlsx",
      type: "array"

    });

  const data = new Blob(
    [excelBuffer],
    {

      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

    }
  );

  saveAs(data, "Residents.xlsx");
};