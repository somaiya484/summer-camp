import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";
import GoogleSignIn from "../Shared/GoogleSignIn/GoogleSignIn";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {name:data, email: data.email}
                         fetch('http://localhost:5000/users', {
                            method:'POST',
                            headers: {
                                'content-type':'application/json'
                            },
                            body: JSON.stringify(saveUser)

                         })
                         .then( res => res.json())
                         .then(data => {
                            if(data.insertedId){
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Successfully user created',
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                                  navigate('/');
                            }
                         })                    

                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <>

            <div className=' my-5'>
                <div className='bg-[#ffbf0000] p-5 rounded w-[500px] mx-auto shadow-2xl'>
                    <h1 className="text-4xl italic font-bold text-yellow-700 uppercase text-center">Sign Up</h1>
                    <GoogleSignIn></GoogleSignIn>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="text-base mt-2 text-gray-700 font-medium  block ">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="border-yellow-500 border-2 shadow-md p-4  rounded w-3/4" />
                            {errors.name && <span className="text-red-700"> Provide Name</span>}
                        </div>
                        <div className="form-control">
                            <label className="text-base mt-2 text-gray-700 font-medium  block ">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="border-yellow-500 border-2 shadow-md p-4  rounded w-3/4" />
                            {errors.email && <span className="text-red-700"> Provide Email</span>}
                        </div>
                        <div className="form-control">
                            <label className="text-base mt-2 text-gray-700 font-medium  block ">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="border-yellow-500 border-2 shadow-md p-4  rounded w-3/4" />
                            {errors.password?.type === 'required' && <p className="text-red-700"> Provide Password</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-700">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-700">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-700">Password Should have one lowercase, one Uppercase, one number and one special character.</p>}
                            {/* <label className='text-base mt-2 text-gray-700 font-medium  block '>
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                        </div>
                        <div>
                            <label className='text-base mt-2 text-gray-700 font-medium  block '>Confirm Password</label>
                            <input className="border-yellow-500 border-2 shadow-md p-4  rounded w-3/4"
                                type="password" placeholder="Confirm Password"
                                {...register("password", { require: true })} />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="text-base mt-2 text-gray-700 font-medium  block ">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="border-yellow-500 border-2 shadow-md p-4  rounded w-3/4" />
                            {errors.photoURL && <span className="text-red-700"> Provide Photo URL</span>}
                        </div>

                        <input className='btn bg-yellow-700 text-white font-semibold rounded-md  hover:bg-transparent hover:border-yellow-700 hover:border-2 hover:text-yellow-700 ml-2 mt-2 w-1/4' value="SignUp" type="submit" />

                    </form>
                    <p><small><Link to="/login">Already have an account Login</Link></small></p>
                </div>
            </div>
        </>
    );
};

export default SignUp;