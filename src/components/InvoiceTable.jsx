import React from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import AddButton from "./AddButton";
import "./InvoiceTable.css";

const testData = [
  { id: 0, description: "Content plan", rate: 50, hours: 4 },
  { id: 1, description: "Copy writing", rate: 50, hours: 2 },
  { id: 2, description: "Website design", rate: 50, hours: 5 },
  { id: 3, description: "Website development", rate: 100, hours: 5 },
];

const InvoiceTable = () => {
  const rows = testData.map((el) => (
    <TableRow
      initialIsEditing={false}
      initialDescription={el.description}
      initialRate={el.rate}
      initialHours={el.hours}
      key={el.id}
    />
  ));

  return (
    <table>
      <TableHeader />
      <tbody>{rows}</tbody>
      <tfoot>
        <AddButton />
      </tfoot>
    </table>
  );
};

export default InvoiceTable;
