import About from "../About/About";
import Instructor from "../Instructor/Instructor";
import PopularClass from "../PopularClass/PopularClass";
import TotalDay from "../TotalDay/TotalDay";
import BannerSlider from "../bannerSlider/bannerSlider";

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <TotalDay></TotalDay>
            <PopularClass></PopularClass>
            <About></About>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;