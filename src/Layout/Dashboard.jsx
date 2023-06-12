import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome } from 'react-icons/fa';
import useClasses from "../hook/useClasses";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import useAdmin from "../hook/useAdmin";

const Dashboard = () => {
    const [clas] = useClasses();
    const { user } = useContext(AuthContext);


    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    // const isInstructor = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content  bg-[#ecd8a3ed]">
                    <div className="flex flex-col justify-center items-center mb-5">
                        <li><img className="rounded-full w-28 h-24 " src={user.photoURL} alt="" /></li>
                        <li>{user.email}</li>
                    </div>


                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/allUsers"> Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/addclass">Add class</NavLink></li>
                        </> : <>
                            <li>
                                <NavLink to="/dashboard/myClasses"> My Selected Class
                                    <span className="badge inl badge-secondary">+{clas?.length || 0}</span>
                                </NavLink>

                            </li>
                            <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment</NavLink></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/instructor">Instructor</NavLink></li>
                    <li><NavLink to="/classes">Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;