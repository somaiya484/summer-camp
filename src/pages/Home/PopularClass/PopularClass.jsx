import Sectiontitels from "../../../components/sectiontitels/Sectiontitels";
import "./PopularClass.css"

import class1 from "../../../assets/class1.jpg"
import class2 from "../../../assets/class2.jpg"
import class3 from "../../../assets/class5.jpg"
import class4 from "../../../assets/class3.jpg"
import class5 from "../../../assets/class4.jpg"
import class6 from "../../../assets/class-6.jpg"


const PopularClass = () => {
    return (
        <div className="mt-24">
            <Sectiontitels
                heading={"About Classes"}
                subheading={"Here are some popular classes"}
            ></Sectiontitels>
            <div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-20">
                    <div className="card">
                        <img className="card-img" src={class1} alt="" />
                        <div className="cardBody">
                            <h2 className="cardTitle">Violin</h2>
                            <p className="cardP">Experience the beauty of the violin in our dedicated violin class. Led by skilled instructors, students will learn proper technique, music theory, and ensemble skills while developing their own unique musical voice.</p>
                            <p className="total w-3/4"> Total Student: 150</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src={class2} alt="" />
                        <div className="cardBody">
                            <h2 className="cardTitle">Piano</h2>
                            <p className="cardP">Discover the magic of the piano in our engaging piano class. Our expert instructors will guide students in mastering technique, reading sheet music, the captivating melodies of this versatile instrument.</p>
                            <p className="total w-3/4"> Total Student: 140</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src={class3} alt="" />
                        <div className="cardBody">
                            <h2 className="cardTitle">euphniam </h2>
                            <p className="cardP">Experience the rich and majestic sound of the euphonium in our specialized class. Our knowledgeable instructors will teach students technique, tone production, and ensemble skills on this unique brass instrument.</p>
                            <p className="total w-3/4"> Total Student: 135</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src={class4} alt="" />
                        <div className="cardBody">
                            <h2 className="cardTitle">cello </h2>
                            <p className="cardP">Immerse yourself in the soulful tones of the cello in our dedicated class led by experienced instructors. Explore technique, expression, and ensemble playing.</p>
                            <p className="total w-3/4"> Total Student: 115</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src={class5} alt="" />
                        <div className="cardBody">
                            <h2 className="cardTitle">dramp</h2>
                            <p className="cardP">Unleash your rhythm and energy in our dynamic drum class. Learn beats, fills, and grooves from experienced instructors and discover the power of percussion.</p>
                            <p className="total w-3/4"> Total Student: 105</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src={class6} alt="" />
                        <div className="cardBody">
                            <h2 className="cardTitle">mandolin</h2>
                            <p className="cardP">Dive into the lively melodies of the mandolin in our engaging class. Learn techniques, chords, and explore various musical genres under expert guidance.</p>
                            <p className="total w-3/4"> Total Student: 97</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularClass;