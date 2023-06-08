import { useEffect, useState } from 'react';

const UseInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
                // setLoading(false);
            })
    }, [])
    return (
        <div>
            {
                instructors.map(instructor =>{
                    <div key={instructor.id} className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{instructor.instructorName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
                })
            }
        </div>
    );
};

export default UseInstructor;