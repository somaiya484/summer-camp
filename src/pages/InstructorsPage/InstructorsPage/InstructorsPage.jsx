import instPic from "../../../assets/allIns.jpg"
import { Parallax } from 'react-parallax';
import { useEffect, useState } from "react";


const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('instructor.json')
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-20 w-[100%] mx-auto mt-8">
                {
                    instructors.map((instructor) => (
                        <div key={instructor} className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={instructor.classImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{instructor.instructorName}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <img src={instructor.instructorImage} alt="" />
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    );
};

export default InstructorsPage;