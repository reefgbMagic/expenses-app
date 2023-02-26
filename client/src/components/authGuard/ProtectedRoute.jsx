/**
 * ------------------------------------------------- *
 *
 * Protected routes:
 * protect routes from logged out users.
 *
 * logged in state comes from Redux loggedin state.
 *
 * ------------------------------------------------- *
 */

import {useSelector} from "react-redux"
import {Outlet, Navigate} from "react-router-dom";

const ProtectedRoutes = () => {
    // const isLogged = useSelector(state => state.auth.loggedIn);
    const isLogged = localStorage.getItem("token");
    return (
        isLogged ? <Outlet/> : <Navigate to="/login"/>
    );
};

export default ProtectedRoutes;