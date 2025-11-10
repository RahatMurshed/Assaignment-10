import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import Testimonials from "../../Components/Testimonials/Testimonials";
import TopStudyPartners from "../../Components/TopStudyPartners/TopStudyPartners";


const Home = () => {
    return (
        <div className="bg-[#111827]">
            <HeroBanner></HeroBanner>
            <TopStudyPartners></TopStudyPartners>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;