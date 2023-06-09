import instPic from "../../../assets/allIns.jpg"
import { Parallax } from 'react-parallax';
import { useEffect, useState } from "react";


const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])
    return (
        <>
            <Parallax
                blur={{ min: -25, max: 25 }}
                bgImage={instPic}
                bgImageAlt="the Instructor"
                strength={-200}
            >
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-70 bg-gradient-to-b from-[#6034062d] to-[#4c2802cc] ">
                    </div>
                    <div className="hero-content text-center text-neutral-content w-[75%] bg-[#5d5c5c69] h-[450px]">
                        <div className="max-w-md flex flex-col items-center justify-center text-[#090501] space-y-1  ">
                            <h1 className="mb-5 text-6xl font-bold italic">Instructor</h1>
                            <p className="mb-5">Meet Our Talented Instructors! Our dedicated team of experienced musicians is ready to inspire and guide you on your musical journey.</p>
                        </div>
                    </div>
                </div>
            </Parallax>
            <p className="my-8 text-center text-base text-gray-700 font-medium ">
                ____Here is our talented tutor____
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-20 pl-32 mb-10">
                {
                    instructors.map((instructor) => (
                        <div key={instructor} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={instructor.instructorImage} className="h-[250px] w-full" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-yellow-700 italic">{instructor.instructorName}</h2>
                                <p className="text-base mt-1 text-gray-700 font-medium ">Instructor of {instructor.classes}</p>
                                <p className="text-base mt-1 text-gray-700 font-medium ">{instructor.instructorEmail}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    );
};

export default InstructorsPage;