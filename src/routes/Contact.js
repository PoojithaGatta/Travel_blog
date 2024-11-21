import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../components/assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact(){
    return (
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={AboutImage}
        title="Contact"
        url="/"
        btnClass="hide"
        />
        <ContactForm />
        <Footer />
        </>


)


}

export default Contact;
