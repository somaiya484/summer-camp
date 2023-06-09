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
        <div>
            <h1 className="text-5xl text-center italic font-bold  p-5 text-yellow-700 uppercase">Login</h1>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div>
                    <label className='text-base mt-3 text-gray-700 font-medium  block ml-3'>Email</label>
                    <input className="border-yellow-500 border-2 shadow-md p-4 m-2 rounded"  {...register("example")} />
                </div>
                <div>
                    
                <label className='text-base mt-3 text-gray-700 font-medium  block ml-3'>PassWord</label>
                    <input className="border-yellow-500 border-2 shadow-md p-4 m-2 rounded"  {...register("example")} />
                </div>


                {/* include validation with required or other standard HTML validation rules */}
                <input className="border-yellow-500 border-2 shadow-md p-4 m-2 rounded" {...register("exampleRequired", { required: true })} />


                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;