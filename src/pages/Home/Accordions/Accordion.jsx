import Sectiontitels from "../../../components/sectiontitels/Sectiontitels";
import faqimg from "../../../assets/faq.png"

const Accordion = () => {
    return (
        <div className="mt-28">
            <Sectiontitels
                heading={"FAQ"}
                subheading={"Some frequently asking question"}
            ></Sectiontitels>
            <div className="flex sm:flex-col md:flex-row gap-3 px-20 justify-evenly items-center mt-6">
                <div>
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Can I participate in the summer camp if I have no prior experience playing an instrument?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely! Our summer camp welcomes students of all levels, including beginners. Our instructors will provide guidance and support tailored to your skill level, ensuring a positive learning experience.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What instruments are available for instruction at the summer camp?
                        </div>
                        <div className="collapse-content">
                            <p>We offer a wide range of instruments for instruction, including guitar, piano, violin, drums, flute, saxophone, and more. During the registration process, you can select your instrument of choice based on availability.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Are instruments provided, or do I need to bring my own?
                        </div>
                        <div className="collapse-content">
                            <p>While we encourage students to bring their own instruments, we do have a limited number of instruments available for rental on a first-come, first-served basis. Please indicate your need for an instrument during the registration process.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I choose my class schedule and duration?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, during registration, you will have the opportunity to select your preferred class schedule and duration. We offer flexible options to accommodate various preferences and availability. However, please note that class availability may be subject to demand.</p>
                        </div>
                    </div>
                </div>
                <img className="w-[500px]" src={faqimg} alt="" />
            </div>
        </div>
    );
};

export default Accordion;