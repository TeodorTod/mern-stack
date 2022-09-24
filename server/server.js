import cors from "cors";
import express from "express";
import connect from "./database/mongodb.js";
import bodyParser from "body-parser";
import TransactionsRouters from "./routes/transactions.js";


const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/transaction", TransactionsRouters);

await connect();

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000");
});
