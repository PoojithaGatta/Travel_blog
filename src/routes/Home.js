import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import heroImage from "../components/assets/1.jpg";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
function Home(){
    return (
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={heroImage}
        title="Let the journey begin..!"
        text="Choose your favourite destination."
        buttonText="Travel plan"
        url="/"
        btnClass="show"
        />
        <Destination />
        <Footer />
        </>

);


}

export default Home;
