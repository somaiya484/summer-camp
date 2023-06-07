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
            <About></About>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;