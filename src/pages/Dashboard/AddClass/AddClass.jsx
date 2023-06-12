import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imgURL = imageResponse.data.display_url;
                    const { className, availableSeats, instructorEmail, instructorName, price } = data;
                    const newClass = { className, instructorName, instructorEmail, availableSeats, price: parseFloat(price), image: imgURL };
                    console.log(newClass)
                    axiosSecure.post('/class' , newClass)
                    .then(data => {
                        console.log('after posting new menu item', data.data)
                        if(data.data.insertedId){
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'New Class Added Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                }

            })
    };
    // console.log(img_hosting_token)
    return (
        <div>
            <h3 className="italic capitalize text-yellow-800 font-semibold h-[60px] flex justify-evenly items-center py-10 text-2xl">Add a new class
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-3">
                    <label className="label">
                        <span className="text-yellow-700 text-base label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("className", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label-text font-semibold">
                        <span className="text-yellow-700 text-base label-text">Class Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <div className="flex gap-3 my-3">
                    <div className="form-control w-full mb-3">
                        <label className="label">
                            <span className="text-yellow-700 text-base label-text font-semibold">Available Seats</span>
                        </label>
                        <input type="text" placeholder="seats"
                            {...register("availableSeats", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-3">
                        <label className="label">
                            <span className="text-yellow-700 text-base label-text font-semibold">Price</span>
                        </label>
                        <input type="text" placeholder="price"
                            {...register("price", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full mb-3">
                    <label className="label">
                        <span className="text-yellow-700 text-base label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" placeholder="Instructor"
                        {...register("instructorName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-3">
                    <label className="label">
                        <span className="text-yellow-700 text-base label-text font-semibold">Instructor Email</span>
                    </label>
                    <input type="text" placeholder="Instructor email"
                        {...register("instructorEmail", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <input className="btn bg-yellow-700 text-white font-semibold rounded-md  hover:bg-transparent hover:border-yellow-700 hover:border-2 hover:text-yellow-700 mt-2" type="submit" value="Add Item" />
            </form>
        </div>
    );
};


export default AddClass;