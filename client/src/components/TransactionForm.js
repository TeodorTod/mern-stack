import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react';

const initialForm = {
    amount: 0,
    description: "",
    date: new Date(),
}


export default function TransactionForm({ fetchTransactions }) {
    const [form, setForm] = useState(initialForm);


    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleDate(newValue) {
        setForm({ ...form, date: newValue })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:4000/transaction", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'content-type': "application/json"
            }
        });
        const data = await res.json();
        if (res.ok) {
            setForm(initialForm);
            fetchTransactions();
        }
    }

    return (
        <Card sx={{ minWidth: 275, marginTop: 10 }}>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h6" sx={{marginBottom: 1}}>
                        Add New Transaction
                    </Typography>
                    <TextField
                        sx={{ marginRight: 5 }}
                        id="outlined-basic"
                        label="Amount"
                        name="amount"
                        size="small"
                        variant="outlined"
                        value={form.amount}
                        onChange={handleChange}
                    />

                    <TextField
                        sx={{ marginRight: 5 }}
                        id="outlined-basic"
                        label="Description"
                        name="description"
                        size="small"
                        variant="outlined"
                        value={form.description}
                        onChange={handleChange}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Transaction Date"
                            inputFormat="MM/DD/YYYY"
                            value={form.date}
                            onChange={handleDate}
                            renderInput={(params) => <TextField sx={{ marginRight: 5 }} size="small" {...params} />}
                        />
                    </LocalizationProvider>
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </CardContent>
        </Card>
    );
}
