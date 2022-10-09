import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import * as React from "react";
import { useSelector } from "react-redux";

export default function Category() {
    const token = Cookies.get('token');
    const user = useSelector(state => state.auth.user)
    function categoryName(id) {
        const category = user.categories.find((category) => category._id === id);
        return category ? category.label : "NA";
    }

    function formatDate(date) {
        return dayjs(date).format("DD-MM-YYYY");
    }

    async function remove(id) {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/category`, {
            method: 'DELETE', 
            headers: {
                Authorizations: `Bearer ${token}`
            }
        })
    }

    return (
        <Container>
            <Typography sx={{ marginTop: 10 }} variant="h6">
                List of Categories
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Label</TableCell>
                            <TableCell align="center">Icon</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.categories.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {row.label}
                                </TableCell>
                                <TableCell align="center">{row.icon}</TableCell>

                                <TableCell align="center">
                                    <IconButton
                                        color="primary"
                                        component="label"
                                    // onClick={() => setEditTransaction(row)}
                                    >
                                        <EditSharpIcon />
                                    </IconButton>

                                    <IconButton
                                        color="warning"
                                        component="label"
                                    onClick={() => remove(row._id)}
                                    >
                                        <DeleteSharpIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
