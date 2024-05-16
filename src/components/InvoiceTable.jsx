import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import AddButton from "./AddButton";
import { useState, useEffect } from "react";
import "./InvoiceTable.css";

const initialData = [
  { id: 0, description: "Content plan", rate: 50, hours: 4 },
  { id: 1, description: "Copy writing", rate: 50, hours: 2 },
  { id: 2, description: "Website design", rate: 50, hours: 5 },
  { id: 3, description: "Website development", rate: 100, hours: 5 },
];

let globalId = 4;

const InvoiceTable = () => {
  const [testData, setTestData] = useState(initialData);

  const addInvoiceRow = () => {
    const newRow = {
      id: globalId,
      description: "New job goes here",
      rate: 0,
      hours: 0,
      isEditing: true,
    };

    setTestData([...testData, newRow]);

    globalId++;
  };

  const deleteInvoiceRow = (id) => {
    const testDataCopy = [...testData];
    const filteredDataCopy = testDataCopy.filter((el) => el.id !== id);
    setTestData(filteredDataCopy);
  };

  const editInvoiceRow = (id, body) => {
    console.log("Row with id:", id);
    console.log("body object:", body);

    const testDataCopy = [...testData];

    const index = testDataCopy.findIndex((el) => el.id === id);

    testDataCopy.splice(index, 1, body);

    setTestData(testDataCopy);
  };

  const rows = testData.map((el) => (
    <TableRow
      initialIsEditing={el.isEditing}
      initialDescription={el.description}
      initialRate={el.rate}
      initialHours={el.hours}
      key={el.id}
      deleteInvoiceRow={() => deleteInvoiceRow(el.id)}
      editInvoiceRow={editInvoiceRow}
      id={el.id}
    />
  ));

  useEffect(() => {
    console.log("Use effect");
  }, [editInvoiceRow]);

  return (
    <table>
      <TableHeader />
      <tbody>{rows}</tbody>
      <tfoot>
        <AddButton addInvoiceRow={addInvoiceRow} />
      </tfoot>
    </table>
  );
};

export default InvoiceTable;
