import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './instructor.css'
import Sectiontitels from "../../../components/sectiontitels/Sectiontitels";

import ins1 from "../../../assets/ins1.jfif"
import ins2 from "../../../assets/inst2.jpg"
import ins3 from "../../../assets/ins3.jpg"
import ins4 from "../../../assets/ins4.jfif"
import ins5 from "../../../assets/ins5.webp"
import ins6 from "../../../assets/inst6.jpg"


const Instructor = () => {
    return (
        <section className=" mt-24">
            <Sectiontitels
                heading={"Instructor"}
                subheading={"All our genius instructor"}
            ></Sectiontitels>
            {/* <h2 className="text-center text-5xl text-yellow-700
            ">Our Instructor</h2> */}
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={ins1} />
                    <p className="text-base font-medium text-gray-800">The instructor of Violin</p>
                    <h2 className="text-2xl font-bold text-yellow-700 italic">Joon-ho</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ins2} />
                    <p className="text-base font-medium text-gray-800">The instructor of Guitar</p>
                    <h2 className="text-2xl font-bold text-yellow-700 italic">Mr. Smith</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ins3} />
                    <p className="text-base font-medium text-gray-800">The instructor of Piano</p>
                    <h2 className="text-2xl font-bold text-yellow-700 italic">Sarfaraz</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ins4} />
                    <p className="text-base font-medium text-gray-800">The instructor of Cello</p>
                    <h2 className="text-2xl font-bold text-yellow-700 italic">Daniel</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ins5} />
                    <p className="text-base font-medium text-gray-800">The instructor of Trumpet</p>
                    <h2 className="text-2xl font-bold text-yellow-700 italic">William Edward</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ins6} />
                    <p className="text-base font-medium text-gray-800">The instructor of Bouzouki</p>
                    <h2 className="text-2xl font-bold text-yellow-700 italic">George Benjamin</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Instructor;