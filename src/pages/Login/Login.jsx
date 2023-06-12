import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from 'sweetalert2'
import GoogleSignIn from "../Shared/GoogleSignIn/GoogleSignIn";


const Login = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Successfully Logged in',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    };

    return (
        <>
            <div className=' my-5'>
                <div className='bg-[#ffbf0000] p-5 rounded w-[500px] mx-auto shadow-2xl'>
                    <h1 className="text-4xl italic font-bold text-yellow-700 uppercase text-center">Login</h1>
                    <GoogleSignIn></GoogleSignIn>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="text-base mt-2 text-gray-700 font-medium  block ">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="border-yellow-500 border-2 shadow-md p-4  rounded w-3/4" />
                            {errors.email && <span className="text-red-700"> Provide Email</span>}
                        </div>

                        <div>
                            <label className='text-base mt-3 text-gray-700 font-medium  block ml-3'><p>Password</p></label>

                            <div className="flex justify-between items-center">
                                <input className="border-yellow-500 border-2 shadow-md p-4 m-2 rounded w-3/4" placeholder="Password"
                                    type={show?"text":"password"}
                                    {...register("password", { require: true })}
                                /> <p onClick={handleShow} className="-ml-14 cursor-pointer">{show?"hide":"show"}</p>
                            </div>

                            {errors.password && <p>{errors.password.message}</p>}
                        </div>

                        <input className='btn bg-yellow-700 text-white font-semibold rounded-md  hover:bg-transparent hover:border-yellow-700 hover:border-2 hover:text-yellow-700 ml-2 mt-2 w-1/4' value="Login" type="submit" />
                    </form>
                    <p><small><Link to="/signUp">Already have an account Login</Link></small></p>
                </div>
            </div>
        </>
    );
};

export default Login;
