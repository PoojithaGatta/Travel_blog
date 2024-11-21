import DestinationData from "./DestinationData";
import "./DestinationStyles.css"
import tImage from "./assets/t1.jpg";
import t1Image from "./assets/t3.jpg";
import rImage from "./assets/r1.jpg";
import r1Image from "./assets/r2.jpg";
const Destination=()=>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Every place has a story!lets go find it.</p>
            <DestinationData 
            className="first-des"
              heading="Taj Mahal,Agra"
              text="The Taj Mahal, a symbol of eternal love, stands majestically on the banks of the Yamuna River in Agra, India. Built in the 17th century by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this iconic marble mausoleum is celebrated for its exquisite beauty and intricate craftsmanship. Its gleaming white domes and serene gardens captivate millions of visitors each year. As one of the New Seven Wonders of the World, the Taj Mahal is a UNESCO World Heritage site and a testament to India’s rich history. A must-see marvel, it inspires awe and admiration with every visit."
              img1={tImage}
              img2={t1Image}
            />


            <DestinationData 
            className="first-des-reverse"
              heading="Red Fort,Delhi"
              text="The Red Fort, an iconic symbol of India’s heritage, stands proudly in the heart of Delhi. Built by Mughal Emperor Shah Jahan in the 17th century, this massive red sandstone fortress showcases stunning Mughal architecture, with intricate carvings, grand halls, and lush gardens. Once the main residence of Mughal emperors, it now hosts India’s Independence Day celebrations each year. As a UNESCO World Heritage site, the Red Fort offers visitors a glimpse into India’s rich history and grandeur."
              img1={rImage}
              img2={r1Image}
            />
        </div>

    );
}
export default Destination;