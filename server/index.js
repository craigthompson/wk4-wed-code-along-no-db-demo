//////////////////////////////////////////////
//  Import packages
//////////////////////////////////////////////
import express from "express";
import ViteExpress from "vite-express";
import handlerFunctions from "./controller.js";

// Create Express instance
const app = express();

// Set up middleware
app.use(express.json());

// Endpoints
const { getInvoices, addInvoice, deleteInvoice, editInvoice } =
  handlerFunctions;

app.get("/invoices", getInvoices);
app.post("/invoices", addInvoice);
app.delete("/invoices/:id", deleteInvoice);
app.put("/invoices/:id", editInvoice);

// Open door to server with .listen()
ViteExpress.listen(app, 9001, () =>
  console.log("Server level OVER 9000! View at http://localhost:9001")
);
