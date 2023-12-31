import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";



const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(` https://summer-camp-server-somaiyai342-gmailcom.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Transfer role Admin',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(` https://summer-camp-server-somaiyai342-gmailcom.vercel.app/users/instructors/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Transfer role Instructor',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })        
    }

    return (
        <div>
            <h3 className="italic capitalize text-yellow-800 font-semibold h-[60px] flex justify-evenly items-center py-10 text-2xl">Total Users:{users.length}
            </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th className="text-center">Email</th>
                            <th>Name</th>
                            <th className="text-center">Action</th>
                            <th className="text-center">Action Two</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._is}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.name.photoURL} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user?.name.name}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className=" py-2 px-4 rounded bg-yellow-700  text-white ">
                                                Admin
                                            </button>
                                    }
                                </td>
                                <td>
                                    {
                                        user.role === 'instructor' ? 'instructor' :
                                            <button onClick={() => handleMakeInstructor(user)} className=" py-2 px-4 rounded bg-yellow-700  text-white ">
                                                Instructor
                                            </button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;