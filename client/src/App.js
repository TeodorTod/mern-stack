import { Outlet } from "react-router-dom";
import AppBar from "./components/AppBar";


function App() {
    return (
        <div>
            <AppBar />
            <Outlet />

            <br />
        </div>
    );
}

export default App;
