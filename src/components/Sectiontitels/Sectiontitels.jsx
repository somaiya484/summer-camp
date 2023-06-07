
const Sectiontitels = ({subheading, heading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center">
            <h2 className=" text-5xl text-yellow-700 py-3 border-y-4 border-[#e4d4b9] italic 
            ">{heading}</h2>
            <h3 className=" text-base mt-3 text-gray-700 font-medium ">___{subheading}___</h3>
        </div>
    );
};

export default Sectiontitels;