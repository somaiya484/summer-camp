import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useClasses from "../../../hook/useClasses";

const MyClasses = () => {
    const [clas, refetch] = useClasses();
    console.log(clas);
    const total = clas.reduce((total, clas) => clas.price + total, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This Item will permanently delete in your list",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/class/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'This Item remove from your list',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <h2 className="text-4xl py-3 text-yellow-600 text-center font-bold">All my selected class</h2>
            <div className="italic capitalize text-yellow-800 font-semibold h-[60px] flex justify-evenly items-center py-10">
                <h3 className="text-2xl">Total Class: {clas.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                {/* <button className="btn btn-sm bg-yellow-700 flex justify-center text-white">PAY</button> */}
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Available Sit</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clas.map((myclass, index) => <tr
                                key={myclass._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-14">
                                            <img src={myclass.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className="
                                text-base">{myclass.classes}</td>
                                <td className="
                                text-base">{myclass.instructorName}</td>
                                <td className="
                                text-base text-center">{myclass.availableSeats}</td>
                                <td className="
                                text-base">${myclass.price}</td>
                                <td className="
                                text-base">
                                    <button onClick={() => handleDelete(myclass)} className="btn btn-ghost bg-red-700  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;