import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

function CheckAuth({ children }) {
    const token = Cookies.get('token');
    return token ? children : <Navigate to="/login" replace={true} />
}


export default CheckAuth