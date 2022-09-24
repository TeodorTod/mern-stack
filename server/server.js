import cors from "cors";
import express from "express";
import mongoose from "mongoose";
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

await mongoose.connect(
    "mongodb+srv://teodor:Teodor1991@teodor-mern.smstf2q.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDB connection is successful");



app.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000");
});
