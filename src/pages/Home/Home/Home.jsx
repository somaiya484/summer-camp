import About from "../About/About";
import Instructor from "../Instructor/Instructor";
import TotalDay from "../TotalDay/TotalDay";
import BannerSlider from "../bannerSlider/bannerSlider";

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <About></About>
            <TotalDay></TotalDay>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;