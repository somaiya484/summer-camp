
const TotalDay = () => {
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center text-yellow-700 py-5 -mt-2 md:h-[110px]">
            <div>
                <h2 className=" text-4xl font-bold text-yellow-700 items-center text-center">Don't miss the first <br /> day of Summer Camp!</h2>
            </div>
            <div className="text-center mt-8 md:mt-0">
                <h3 className=" text-xl font-semibold text-gray-700 items-center">The hole session will be</h3>
                <div className="flex gap-5 italic font-medium">
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 75 }}></span>
                        </span>
                        days
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div>
                        <span className="countdown font-mono text-4xl">
                            <span style={{ "--value": 30 }}></span>
                        </span>
                        min
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalDay;