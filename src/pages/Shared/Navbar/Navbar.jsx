import { Link } from 'react-router-dom';
import img1 from '../../../assets/logo1.png'
import { useContext } from 'react';
import { AuthContext } from '../../../authProvider/AuthProvider';
import useClasses from '../../../hook/useClasses';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [clas] = useClasses();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructor">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {
            user && <li>
                <Link to="/dashboard/myClasses">DashBoard</Link>
            </li>
        }
        {
            user && <li><img className="rounded-full w-[90px] h-[80px] flex justify-center items-center  -mt-5" src={user.photoURL} alt="" /></li>

        }

        {
            user ? <>
                <li onClick={handleLogOut} className='btn bg-yellow-700 text-white font-semibold rounded-md  hover:bg-transparent hover:border-yellow-700 hover:border-2 hover:text-yellow-700
        '>LogOut</li>
            </> : <>
                <Link to="/login"><li className='btn bg-yellow-700 text-white font-semibold rounded-md  hover:bg-transparent hover:border-yellow-700 hover:border-2 hover:text-yellow-700
        '>Login</li></Link>
            </>
        }
    </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navItem}
                        </ul>
                    </div>
                    <img width="50" height="50" className='' src={img1} alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-4xl font-bold text-gray-800 italic">Instru<span className='text-yellow-700'>Learn</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </>
    );
};

export default Navbar;