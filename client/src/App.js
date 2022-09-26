import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";



function App() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions()
    }, []);

    async function fetchTransactions() {
        const res = await fetch('http://localhost:4000/transaction');
        const { data } = await res.json();
        setTransactions(data);
    }

    return (
        <div>
            <AppBar />

            <Container>
                <TransactionForm fetchTransactions={fetchTransactions} />
                <TransactionsList transactions={transactions} fetchTransactions={fetchTransactions} />
            </Container>
            <br />
        </div>
    );
}

export default App;
