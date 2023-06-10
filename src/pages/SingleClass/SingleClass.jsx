import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom"
const SingleClass = ({ clas }) => {

    const { _id, classImage, classes, instructorName, availableSeats, price, instructorEmail } = clas;

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleSelectClass = clas => {
        console.log(clas);
        if (user) {
            const addClass = { classId:_id, classImage }
            fetch('http://localhost:5000/class', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Class has been selected ',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login Order The food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={classImage} className="h-[250px] w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl text-yellow-700 italic">{classes}</h2>
                    <p className="text-base  text-gray-700 font-medium ">Instructor of {instructorName}</p>
                    <p className="text-base  text-gray-700 font-medium ">Instructor of {availableSeats}</p>
                    <p className="text-base  text-gray-700 font-medium ">Instructor of {price}</p>
                    <p className="text-base  text-gray-700 font-medium ">{instructorEmail}</p>
                </div>
                <div className="card-actions justify-center">
                    <button onClick={() => handleSelectClass(clas)} className=" bg-yellow-700 border-2 border-yellow-700 text-white font-semibold rounded-md  hover:bg-transparent hover:border-yellow-700 hover:border-2 hover:text-yellow-700 py-1 px-3">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;