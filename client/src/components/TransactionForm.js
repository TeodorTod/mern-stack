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


export default function TransactionForm() {

    function handleChange() {

    }

    return (
        <Card sx={{ minWidth: 275, marginTop: 10 }}>
            <CardContent>
                <form>
                    <Typography variant="h6">
                        Add New Transaction
                    </Typography>
                    <TextField
                        sx={{ marginRight: 5 }}
                        id="outlined-basic"
                        label="Amount"
                        size="small"
                        variant="outlined" />
                    <TextField
                        sx={{ marginRight: 5 }}
                        id="outlined-basic"
                        label="Description"
                        size="small"
                        variant="outlined" />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Transaction Date"
                            inputFormat="MM/DD/YYYY"
                            onChange={handleChange}
                            renderInput={(params) => <TextField sx={{ marginRight: 5 }} size="small" {...params} />}
                        />
                    </LocalizationProvider>
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </CardContent>
        </Card>
    );
}
