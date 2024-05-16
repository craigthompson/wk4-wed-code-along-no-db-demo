import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import AddButton from "./AddButton";
import { useState, useEffect } from "react";
import axios from "axios";
import "./InvoiceTable.css";

// const initialData = [
//   { id: 0, description: "Content plan", rate: 50, hours: 4 },
//   { id: 1, description: "Copy writing", rate: 50, hours: 2 },
//   { id: 2, description: "Website design", rate: 50, hours: 5 },
//   { id: 3, description: "Website development", rate: 100, hours: 5 },
// ];

// let globalId = 4;

const InvoiceTable = () => {
  const [testData, setTestData] = useState([]);

  const addInvoiceRow = () => {
    const newRow = {
      description: "New job goes here",
      rate: 0,
      hours: 0,
      isEditing: true,
    };

    axios.post("/invoices", newRow).then((res) => setTestData(res.data));
  };

  const deleteInvoiceRow = async (id) => {
    // const testDataCopy = [...testData];
    // const filteredDataCopy = testDataCopy.filter((el) => el.id !== id);
    // setTestData(filteredDataCopy);
    const { data } = await axios.delete(`/invoices/${id}`);
    setTestData(data);
  };

  const editInvoiceRow = (id, body) => {
    console.log("Row with id:", id);
    console.log("body object:", body);

    axios.put(`/invoices/${id}`, body).then((res) => {
      setTestData(res.data);
    });
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
    getData();
  }, []);

  const getData = async () => {
    let { data } = await axios.get("/invoices");
    setTestData(data);
  };

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
