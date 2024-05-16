let invoiceData = [
  { id: 0, description: "Content plan", rate: 50, hours: 4 },
  { id: 1, description: "Copy writing", rate: 50, hours: 2 },
  { id: 2, description: "Website design", rate: 50, hours: 5 },
  { id: 3, description: "Website development", rate: 100, hours: 5 },
];

let globalId = invoiceData.length;

const handlerFunctions = {
  getInvoices: (req, res) => {
    res.status(200).send(invoiceData);
  },

  addInvoice: (req, res) => {
    const newRow = req.body;
    newRow.id = globalId;
    globalId++;
    invoiceData.push(newRow);
    res.status(200).send(invoiceData);
  },

  deleteInvoice: (req, res) => {
    const { id } = req.params;
    invoiceData = invoiceData.filter((el) => el.id !== +id); // Coerce the id string to a number
    res.status(200).send(invoiceData);
  },

  editInvoice: (req, res) => {
    const { id } = req.params;
    const editData = req.body;
    editData.id = +id; // Coerce the id to a number for future comparison operations
    editData.isEditing = false;

    const index = invoiceData.findIndex((el) => el.id === +id); // Coerce the id string to a number

    invoiceData.splice(index, 1, editData);

    res.status(200).send(invoiceData);
  },
};

export default handlerFunctions;
