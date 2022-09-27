import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";


function App() {
    return (
        <>
            <AppBar />
            <Outlet />

            <br />
        </>
    );
}

export default App;
