import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../components/assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About(){
    return (
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={AboutImage}
        title="About"
        url="/"
        btnClass="hide"
        />
        <AboutUs />
        <Footer />
        </>

)


}

export default About;
