import aboutImage from "../../../assets/about.jpg"
// import bg from "../../../assets/bg.jpg"
import Sectiontitels from "../../../components/sectiontitels/Sectiontitels";
import './About.css'

const About = () => {
    return (
        <div className="my-24 about-section bg-fixed">
            <Sectiontitels
                heading={"Our Benefits"}
                subheading={"Why choose us"}
            ></Sectiontitels>
            <div className='flex flex-col md:flex-row gap-4 justify-between items-center w-3/4 m-auto  py-24 px-3'>
                <div className="w-full">
                    <img className='rounded' src={aboutImage} alt="" />
                </div>
                <div className='w-full'>
                    <p className='text-base align-middle mt-3 font-medium md:ml-5'>

                        Welcome to our Music Instrument Learning Summer Camp! Our camp is a fantastic opportunity for musicians of all levels to develop their skills, explore new instruments, and experience the joy of making music. With our team of dedicated and experienced instructors, students receive personalized instruction tailored to their abilities and musical interests. From individual lessons to group workshops and ensemble performances, our camp offers a well-rounded music education. We create a supportive and inclusive environment where students can collaborate, make lasting friendships, and ignite their passion for music. Join us this summer and embark on a transformative musical journey!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;