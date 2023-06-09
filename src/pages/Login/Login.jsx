import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=' my-16'>
            <div className='bg-[#ffbf0000] p-16 rounded w-[600px] mx-auto shadow-2xl'>
                <h1 className="text-4xl italic font-bold text-yellow-700 uppercase">Login</h1>
                <form className='' onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className='text-base mt-3 text-gray-700 font-medium  block ml-3'>Email</label>
                        <input type='email' className="border-yellow-500 border-2 shadow-md p-4 m-2 rounded w-3/4"   {...register("name", { require: true })} />
                    </div>


                    <div>
                        <label className='text-base mt-3 text-gray-700 font-medium  block ml-3'>Password</label>

                        <input className="border-yellow-500 border-2 shadow-md p-4 m-2 rounded w-3/4"
                            type="password"
                            {...register("password", { require: true })} />

                        {errors.password && <p>{errors.password.message}</p>}
                    </div>


                    {errors.name && errors.password && <span>This field is required</span>}

                    <input className='btn bg-yellow-700 text-white font-semibold rounded-md  hover:bg-transparent hover:border-yellow-700 hover:border-2 hover:text-yellow-700 ml-2 mt-3' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Login;