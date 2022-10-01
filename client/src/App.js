import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";
import { getUser } from './store/auth';


function App() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser())
    }, []);
    return (
        <>
            <AppBar />
            <Outlet />

            <br />
        </>
    );
}

export default App;
