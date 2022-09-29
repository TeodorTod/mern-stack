import React, { useEffect, useState } from 'react'
import { Container } from "@mui/system";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";
import Cookies from 'js-cookie';

function Home() {
    const [transactions, setTransactions] = useState([]);
    const [editTransaction, setEditTransaction] = useState({});

    useEffect(() => {
        fetchTransactions()
    }, []);

    async function fetchTransactions() {
        const token = Cookies.get('token')
        const res = await fetch('http://localhost:4000/transaction', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const { data } = await res.json();
        setTransactions(data);
    }

    return (
        <Container>
            <TransactionForm
                fetchTransactions={fetchTransactions}
                editTransaction={editTransaction}
            />
            <TransactionsList
                transactions={transactions}
                fetchTransactions={fetchTransactions}
                setEditTransaction={setEditTransaction}
            />
        </Container>
    )
}

export default Home