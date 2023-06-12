import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useAdmin from "../hook/useAdmin";

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin] = useAdmin()
    const location = useLocation();

    if(loading || isAdmin){
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoutes;