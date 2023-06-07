import img1 from '../../../assets/banner1.jpg'
import img2 from '../../../assets/banner2.jpg'
import img3 from '../../../assets/banner3.webp'
import img4 from '../../../assets/banner4.jpg'


const bannerSlider = () => {
    return (
        <div className="carousel w-full  h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute  flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#603506e1] to-[#693906cc]">
                    <div className='text-[#090501] space-y-7 w-3/4 '>
                        <h2 className='text-6xl font-bold leading-tight text-center'>Discover the Music Within: Learn, Play, Thrive</h2>
                        <p className=' text-#090501 w-3/4 mx-auto  text-center'>Experience the power of music as you learn, practice, and express your creativity with expert guidance.</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-black text-white border-black">❮</a>
                    <a href="#slide2" className="btn btn-circle  bg-black text-white border-black">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute  flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#603506e1] to-[#693906cc]">
                    <div className='text-[#090501] space-y-7 w-3/4    '>
                        <h2 className='text-6xl font-bold leading-tight text-center'>Unleash Your Musical Potential: Master, Perform, Shine</h2>
                        <p className=' text-#090501 w-3/4 mx-auto  text-center'>Discover the art of playing instruments, delve into music theory, and embrace the joy of musical expression.</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle  bg-black text-white border-black">❮</a>
                    <a href="#slide3" className="btn btn-circle  bg-black text-white border-black">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute  flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#603506e1] to-[#693906cc]">
                    <div className='text-[#090501] space-y-7 w-3/4    '>
                        <h2 className='text-6xl font-bold leading-tight text-center'>Harmonize Your Skills: Learn, Practice, Excel</h2>
                        <p className=' text-#090501 w-3/4 mx-auto  text-center'>Unlock your potential, hone your skills, and become a confident performer through our comprehensive instrument training.</p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle  bg-black text-white border-black">❮</a>
                    <a href="#slide4" className="btn btn-circle  bg-black text-white border-black">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute  flex justify-center w-full items-center h-full left-0 top-0 bg-gradient-to-r from-[#603506e1] to-[#693906cc]">
                    <div className='text-[#090501] space-y-7 w-3/4    '>
                        <h2 className='text-6xl font-bold leading-tight text-center'>Ignite Your Passion for Music: Play, Create, Inspire</h2>
                        <p className=' text-#090501 w-3/4 mx-auto  text-center'>Immerse yourself in a world of melodies, rhythms, and harmonies as you embark on a musical journey of growth and mastery
                        </p>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle  bg-black text-white border-black">❮</a>
                    <a href="#slide1" className="btn btn-circle  bg-black text-white border-black">❯</a>
                </div>
            </div>
        </div>
    );
};

export default bannerSlider;