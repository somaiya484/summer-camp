import Sectiontitels from "../../../components/sectiontitels/Sectiontitels";
import faqimg from "../../../assets/faq.png"

const Accordion = () => {
    return (
        <div className="mt-24">
            <Sectiontitels
                heading={"FAQ"}
                subheading={"Some frequently asking question"}
            ></Sectiontitels>
            <div className="flex sm:flex-col md:flex-row gap-3 px-20">
                <div>
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-50">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
                <img src={faqimg} alt="" />
            </div>
        </div>
    );
};

export default Accordion;