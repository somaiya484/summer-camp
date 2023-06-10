import classesImg from "../../assets/classes.jpg"
import { Parallax } from 'react-parallax';
import { useEffect, useState } from "react";

import SingleClass from "../SingleClass/SingleClass";

const Classes = () => {


    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, []);



    return (
        <>
            <Parallax
                blur={{ min: -25, max: 25 }}
                bgImage={classesImg}
                bgImageAlt="the Instructor"
                strength={-200}
            >
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-70 bg-gradient-to-b from-[#60340615] to-[#4c28025a] ">
                    </div>
                    <div className="hero-content text-center text-neutral-content w-[75%] bg-[#5d5c5c94] h-[450px]">
                        <div className="max-w-md flex flex-col items-center justify-center text-[#090501] space-y-1  ">
                            <h1 className="mb-5 text-6xl font-bold italic">Classes</h1>
                            <p className="mb-5">Our classes provide a comprehensive and structured approach to instrument learning, covering essential techniques, theory, repertoire, and personalized guidance to support your musical growth and development.</p>
                        </div>
                    </div>
                </div>
            </Parallax>
            <p className="my-8 text-center text-base text-gray-700 font-medium ">
                ____Here Is Our All Classes____
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-20 pl-32 mb-10">
                {
                    classes.map((clas) => <SingleClass 
                    key={clas._id} clas={clas}
                    ></SingleClass>
                    )
                }
            </div>
        </>
    );
};

export default Classes;