import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImage from "../components/assets/12.jpg";
import './Service.css';

const popularSpotsData = {
    "Tamil Nadu": [
    {
        "name": "Marina Beach",
        "description": "Marina Beach in Chennai is the longest urban beach in India, stretching over 13 kilometers. Famous for its golden sands and vibrant atmosphere, it's a popular spot for locals and tourists alike.",
        "category": "Beaches",
        "images": ["https://www.trawell.in/admin/images/thumbs/705431925Merina_Beach_Main_thumb.jpg"]
    },
    {
        "name": "Mahabalipuram Beach",
        "description": "Mahabalipuram Beach, located near the historic UNESCO World Heritage Site, is known for its serene atmosphere and proximity to ancient rock-cut temples.",
        "category": "Beaches",
        "images": ["https://www.holidify.com/images/cmsuploads/compressed/510420922512bebca46d0b_20220125162140.jpeg"]
    },
    {
        "name": "Rameswaram Beach",
        "description": "Rameswaram Beach offers crystal-clear waters and is a peaceful retreat near the famous Ramanathaswamy Temple.",
        "category": "Beaches",
        "images": ["https://www.treebo.com/blog/wp-content/uploads/2018/08/feature-13.jpg"]
    },
    {
        "name": "Kanyakumari Beach",
        "description": "Kanyakumari Beach, at the southernmost tip of India, is famous for its stunning sunrise and sunset views.",
        "category": "Beaches",
        "images": ["https://www.india.com/wp-content/uploads/2024/08/Kanyakumari-Beach.jpg"]
    },
    {
        "name": "Ooty",
        "description": "Ooty, often called the 'Queen of Hill Stations,' is surrounded by lush greenery and offers breathtaking views of the Nilgiri Hills.",
        "category": "Mountains",
        "images": ["https://www.trawell.in/blog/wp-content/uploads/2024/03/ooty-main-730x410.jpg"]
    },
    {
        "name": "Kodaikanal",
        "description": "Kodaikanal is a serene hill station known for its beautiful lakes, misty cliffs, and dense forests.",
        "category": "Mountains",
        "images": ["https://www.abhibus.com/blog/wp-content/uploads/2023/04/Tourist-Places-in-Kodaikanal-.jpg"]
    },
    {
        "name": "Yercaud",
        "description": "Yercaud, located in the Eastern Ghats, is a lesser-known hill station with coffee plantations and scenic viewpoints.",
        "category": "Mountains",
        "images": ["https://www.indiatravel.app/wp-content/uploads/2024/02/places-to-visit-in-yercaud.jpg"]
    },
    {
        "name": "Coonoor",
        "description": "Coonoor is a picturesque hill station near Ooty, famous for its tea estates and lush landscapes.",
        "category": "Mountains",
        "images": ["https://www.isprava.com/wp-content/uploads/2019/05/HolidayIQ.jpg"]
    },
    {
        "name": "Brihadeeswarar Temple",
        "description": "Brihadeeswarar Temple in Thanjavur, a UNESCO World Heritage Site, is a masterpiece of Chola architecture.",
        "category": "Temples",
        "images": ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6a/e5/a7/thanjavur-brihadeeshwara.jpg?w=1200&h=-1&s=1"]
    },
    {
        "name": "Meenakshi Amman Temple",
        "description": "Meenakshi Amman Temple in Madurai is renowned for its stunning architecture and vibrant religious celebrations.",
        "category": "Temples",
        "images": ["https://admin.southindiatoursandtravels.com/pages/gallery/24742.jpg"]
    },
    {
        "name": "Ramanathaswamy Temple",
        "description": "Ramanathaswamy Temple in Rameswaram is known for its elaborate corridors and sacred significance in Hinduism.",
        "category": "Temples",
        "images": ["https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/rameswaram-temple-1656167436_f2c551193bb7d4bc6f70.webp"]
    },
    {
        "name": "Kapaleeshwarar Temple",
        "description": "Kapaleeshwarar Temple, located in Chennai’s Mylapore neighborhood, is a stunning example of Dravidian architecture.",
        "category": "Temples",
        "images": ["https://www.hoteldekho.com/storage/img/tourattraction/1644929820fort%20st.jpg"]
    },
    {
        "name": "Fort St. George Museum",
        "description": "Fort St. George Museum in Chennai offers a fascinating glimpse into India’s colonial history.",
        "category": "Historical",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMY6r4BaygE3mBkFJUjNWx1fZFfKB5KXZgA&s"]
    },
    {
        "name": "Thanjavur Palace",
        "description": "Thanjavur Palace is a historic palace complex known for its architecture and artistic treasures from the Chola dynasty.",
        "category": "Historical",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsTetnKkeXjNyHpbi_O8LOM2QGoiW7nakHw&s"]
    },
    {
        "name": "Hogenakkal Falls",
        "description": "Hogenakkal Falls, located on the Kaveri River, is often referred to as the 'Niagara of India.'",
        "category": "Waterfalls",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hogenakkal_Falls_Close.jpg/640px-Hogenakkal_Falls_Close.jpg"]
    },
    {
        "name": "Courtallam Falls",
        "description": "Courtallam Falls is a popular tourist spot, known as the 'Spa of South India' for its therapeutic waters.",
        "category": "Waterfalls",
        "images": ["https://assets.telegraphindia.com/telegraph/2022/Aug/1660132028_courtallam-five-falls-2.jpg"]
    },
    {
        "name": "Silver Cascade Falls",
        "description": "Silver Cascade Falls is a picturesque waterfall located near Kodaikanal, attracting nature enthusiasts.",
        "category": "Waterfalls",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpBtHT24HzKcqZkFPLn35HUR4fe2zNfaURA&s"]
    }
],

    "Kerala": [
    {
        "name": "Munnar",
        "description": "Munnar, a picturesque hill station in Kerala, is known for its lush tea plantations, misty mountains, and cool climate.",
        "category": "Mountains",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Munnar_hill_station_.JPG/800px-Munnar_hill_station_.JPG"]
    },
    {
        "name": "Wayanad",
        "description": "Wayanad, nestled in the Western Ghats of Kerala, is known for its lush forests, wildlife sanctuaries, and scenic waterfalls.",
        "category": "Mountains",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jRa1zYXP8x6yOxPB6RmjukAh7gMh2qFJrg&s"]
    },
    {
        "name": "Vythiri",
        "description": "Vythiri, located in the Wayanad district, offers serene mountain views, spice plantations, and is a perfect retreat for nature lovers.",
        "category": "Mountains",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlROocZl-yV9F3rqlp1gthVrSwTXuZQSb1Ug&s"]
    },
    {
        "name": "Agasthyakoodam",
        "description": "Agasthyakoodam, one of the highest peaks in Kerala, is a paradise for trekkers with its rich biodiversity and panoramic views.",
        "category": "Mountains",
        "images": ["https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/15/136f990545ec23bc3a5ca8946f505e9f_1000x1000.jpg"]
    },
    {
        "name": "Allepey",
        "description": "Often called the ‘Venice of the East,’ Alleppey is famous for its tranquil backwaters and houseboat cruises.",
        "category": "Beaches",
        "images": ["https://s3.india.com/wp-content/uploads/2024/06/Beaches-Around-Alleppey-City-11.jpg?impolicy=Medium_Widthonly&w=350&h=263"]
    },
    {
        "name": "Kovalam",
        "description": "Kovalam is a popular beach destination known for its golden sands, clear waters, and beautiful lighthouses.",
        "category": "Beaches",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf9eu9K8mDlRB1gSWGpeNc1Mbp6CZY_sgTCg&s"]
    },
    {
        "name": "Varkala",
        "description": "Varkala is known for its cliffs, pristine beaches, and Papanasam Beach, which is believed to wash away sins.",
        "category": "Beaches",
        "images": ["https://www.thatgoangirl.com/wp-content/uploads/2024/03/things-to-do-in-Varkala-scaled.jpg"]
    },
    {
        "name": "Bekal",
        "description": "Bekal is famous for the Bekal Fort and its scenic beach, offering a perfect blend of history and natural beauty.",
        "category": "Beaches",
        "images": ["https://www.holidify.com/images/bgImages/BEKAL.jpg"]
    },
    {
        "name": "Kochi",
        "description": "Kochi, a vibrant port city, blends modernity with colonial heritage, featuring Chinese fishing nets, Portuguese architecture, and historic sites.",
        "category": "Historical",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/INS_Vikrant_under_construction_at_Cochin_Shipyard.png/288px-INS_Vikrant_under_construction_at_Cochin_Shipyard.png"]
    },
    {
        "name": "Padmanabhapuram Palace",
        "description": "Padmanabhapuram Palace, a stunning wooden palace, is known for its unique Kerala-style architecture and historical significance.",
        "category": "Historical",
        "images": ["https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/padmanabhapuram-palace-1656141484_f6515d569a0b7f508740.webp"]
    },
    {
        "name": "Fort Kochi",
        "description": "Fort Kochi is a historic neighborhood known for its colonial past, showcasing Dutch, Portuguese, and British influences.",
        "category": "Historical",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kochi%2C_Fishing_nets_at_sunset%2C_Kerala%2C_India.jpg/1200px-Kochi%2C_Fishing_nets_at_sunset%2C_Kerala%2C_India.jpg"]
    },
    {
        "name": "Athirappilly",
        "description": "Athirappilly, known as the ‘Niagara of India,’ is one of Kerala's largest and most famous waterfalls.",
        "category": "Waterfalls",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0lucvJeZ4Z7bpzohj7e7-Y5Y9TxOFrQZsg&s"]
    },
    {
        "name": "Meghamalai",
        "description": "Meghamalai is a scenic spot with lush greenery and the beautiful Meghamalai Waterfalls in the Western Ghats.",
        "category": "Waterfalls",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbL2TXA9MR6UwSwzCE_ahMCwgGOJ7qHttNAQ&s"]
    },
    {
        "name": "Soochipara Falls",
        "description": "Soochipara Falls, also known as the Sentinel Rock Waterfalls, is a three-tiered waterfall surrounded by dense forests.",
        "category": "Waterfalls",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-eXdu0c2HRjp6ttLbHaBUbSyPyPUV7B4Kw&s"]
    },
    {
        "name": "Palaruvi Waterfalls",
        "description": "Palaruvi Waterfalls, located in the Kollam district, is known for its scenic beauty and is a perfect spot for a refreshing dip.",
        "category": "Waterfalls",
        "images": ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/83/f1/0a/dscn1202-largejpg.jpg?w=1200&h=-1&s=1"]
    },
    {
        "name": "Vazhachal Waterfalls",
        "description": "Vazhachal Waterfalls, located in the Thrissur district, is a beautiful cascade surrounded by lush forests.",
        "category": "Waterfalls",
        "images": ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/4e/10/f3/vazhachal.jpg?w=1200&h=-1&s=1"]
    }
],

    "Delhi": [
    {
        "name": "India Gate",
        "description": "India Gate is a war memorial dedicated to Indian soldiers who died during World War I. It is one of Delhi's most iconic landmarks.",
        "category": "Historical",
        "images": ["https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/27/5c47137b8b32bdc3702a6c0b4b2359e9_1000x1000.jpg"]
    },
    {
        "name": "Red Fort",
        "description": "The Red Fort is a historic fort in the city of Delhi, known for its stunning Mughal architecture and significance in India's independence.",
        "category": "Historical",
        "images": ["https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAzNDMwNzE1ODA1NjcyNzk2/fort-agra-easy-peasy.jpg"]
    },
    {
        "name": "Qutub Minar",
        "description": "Qutub Minar is a UNESCO World Heritage Site and the tallest brick minaret in the world, showcasing Indo-Islamic Afghan architecture.",
        "category": "Historical",
        "images": ["https://akm-img-a-in.tosshub.com/indiatoday/images/story/201704/647_042717101905.jpg"]
    },
    {
        "name": "Humayun's Tomb",
        "description": "Humayun's Tomb is a UNESCO World Heritage Site and the tomb of the Mughal Emperor Humayun, known for its grand architecture.",
        "category": "Historical",
        "images": ["https://www.drishtiias.com/images/uploads/1623837962_image2.png"]
    },
    {
        "name": "Jama Masjid",
        "description": "Jama Masjid, one of the largest mosques in India, is an architectural marvel and a significant place of worship in Delhi.",
        "category": "Historical",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQOvYulCjQ9Ha8C9K8OcweF_kPMNPnCPXaA&s"]
    },
    {
        "name": "Lotus Temple",
        "description": "The Lotus Temple, shaped like a lotus flower, is a Bahá'í House of Worship, known for its stunning architecture and peaceful environment.",
        "category": "Temples",
        "images": ["https://www.onecountry.org/sites/default/files/story/7003.jpg"]
    },
    {
        "name": "Akshardham Temple",
        "description": "Akshardham Temple is a modern Hindu temple complex in Delhi, famous for its grand architecture, exhibitions, and cultural performances.",
        "category": "Temples",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUgypLvp6MvSU0qBPIMGM6al-W66ysWgmrQ&s"]
    },
    {
        "name": "ISKCON Temple",
        "description": "The ISKCON Temple in Delhi is a spiritual center that offers a peaceful environment for prayer and meditation, dedicated to Lord Krishna.",
        "category": "Temples",
        "images": ["https://static.wanderon.in/wp-content/uploads/2024/04/iskcon-temple-delhi.jpg"]
    },
    {
        "name": "Jantar Mantar",
        "description": "Jantar Mantar is an astronomical observatory built in the 18th century, featuring large instruments that measure celestial bodies.",
        "category": "Historical",
        "images": ["https://editor.thisday.app/content/images/2024/04/India_Delhi_Jantar_Mantar_observatory_1.jpg"]
    },
    {
        "name": "Sultanpur Bird Sanctuary",
        "description": "Sultanpur Bird Sanctuary is a beautiful natural park, known for its diverse bird species and peaceful environment.",
        "category": "Waterfalls",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThey-xjq4qU8AyOPsjS51QIhHHQjzDx1mo-A&s"]
    },
    {
        "name": "Garden of Five Senses",
        "description": "The Garden of Five Senses is a unique park in Delhi, designed to engage all five senses with its lush greenery, beautiful flowers, and tranquil paths.",
        "category": "Waterfalls",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCWKT0OGqtCS6CkWJlv2rYXLhGhrkrEfoQA&s"]
    },
   
    {
        "name": "Tughlaqabad Fort",
        "description": "Tughlaqabad Fort is a historic fort built in the 14th century, known for its massive walls and strategic location.",
        "category": "Historical",
        "images": ["https://th.bing.com/th/id/R.2f9ec9840e06acdbde497d9946c6752d?rik=VJmeXoipxXXUOw&riu=http%3a%2f%2fwww.thehistoryhub.com%2fwp-content%2fuploads%2f2014%2f05%2fTughlaqabad-Fort-Images.jpg&ehk=V9S8l2hwxwmqrOg4YR76uJZaWf2bPYYPnU0HtX4%2fMhY%3d&risl=&pid=ImgRaw&r=0"]
    },
    {
        "name": "Agra Fort",
        "description": "Agra Fort, a UNESCO World Heritage Site, is a large 16th-century fort with rich Mughal architecture and significant historical importance.",
        "category": "Historical",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Agra_03-2016_10_Agra_Fort.jpg/800px-Agra_03-2016_10_Agra_Fort.jpg"]
    },
    {
        "name": "Jama Masjid",
        "description": "The Jama Masjid, located in the heart of Delhi, is one of the largest mosques in India and an architectural marvel.",
        "category": "Historical",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCKaaSwcdWRSf201TH031o2tDf5bSEFv67w&s"]
    },
    {
        "name": "Chandni Chowk",
        "description": "Chandni Chowk is one of the oldest and busiest markets in Old Delhi, famous for its historic significance and vibrant shopping scene.",
        "category": "Historical",
        "images": ["https://s7ap1.scene7.com/is/image/incredibleindia/chandni-chowk-delhi-2-attr-hero?qlt=82&ts=1727352381326"]
    }
],
    "Goa": [
    {
        "name": "Anjuna Beach",
        "description": "Anjuna Beach is known for its lively atmosphere, white sandy shores, and vibrant nightlife. It's a popular spot for beach parties and water sports.",
        "category": "Beaches",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3eN4bTFPk_o3O7oXBxmeT-O12WurB-6HlA&s"]
    },
    {
        "name": "Baga Beach",
        "description": "Baga Beach is one of the most famous beaches in Goa, popular for its lively vibe, water activities, and beach shacks serving fresh seafood.",
        "category": "Beaches",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK985z6X4oWuSdILTsyKfU_jIlRsphQEOU_g&s"]
    },
    {
        "name": "Calangute Beach",
        "description": "Calangute Beach is the largest and busiest beach in North Goa, attracting tourists for sunbathing, swimming, and water sports.",
        "category": "Beaches",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ofuPw1ndy5LWityuWDN427cq_xHHSpjqFA&s"]
    },
    {
        "name": "Palolem Beach",
        "description": "Palolem Beach is a picturesque crescent-shaped beach in South Goa, known for its calm waters and peaceful atmosphere, ideal for relaxation.",
        "category": "Beaches",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-khLoCvBCo4_L2EJIP-1I6vsjd3A2CNhJUQ&s"]
    },
    {
        "name": "Dudhsagar Waterfall",
        "description": "Dudhsagar Waterfall is one of the tallest waterfalls in India, known for its breathtaking beauty, especially during the monsoon season.",
        "category": "Waterfalls",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHsXGlDfuohKKfy4_DkuN4QmyqShTc2d4YA&s"]
    },
    {
        "name": "Bhagwan Mahavir Wildlife Sanctuary Waterfalls",
        "description": "The waterfalls inside Bhagwan Mahavir Wildlife Sanctuary offer a serene and picturesque environment amidst dense forests, perfect for nature enthusiasts.",
        "category": "Waterfalls",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Dudhsagar_Falls_Triplet.jpg/563px-Dudhsagar_Falls_Triplet.jpg"]
    },
    {
        "name": "Hivre Waterfalls",
        "description": "Hivre Waterfalls is a hidden gem in Goa, surrounded by lush greenery, making it an ideal place for nature lovers and trekkers.",
        "category": "Waterfalls",
        "images": ["https://www.seawatersports.com/images/places/hivre-waterfalls.jpg"]
    },
    {
        "name": "Tambdi Surla Waterfall",
        "description": "Tambdi Surla Waterfall is located in the Western Ghats and is surrounded by dense forest, providing a calm retreat for visitors.",
        "category": "Waterfalls",
        "images": ["https://dudhsagar-falls.com/wp-content/uploads/2018/10/Tambdi-Surla-Waterfalls-Trekking-Package-Goa.jpg"]
    },
    {
        "name": "Mollem Waterfall",
        "description": "Molem Waterfall is a serene and lesser-known waterfall located in the Bhagwan Mahavir Wildlife Sanctuary, perfect for those seeking peace and solitude.",
        "category": "Waterfalls",
        "images": ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/91/5d/14/dudhsagar-falls.jpg?w=500&h=500&s=1"]
    },
    {
        "name": "Fort Aguada",
        "description": "Fort Aguada is a 17th-century Portuguese fort situated on the shores of the Arabian Sea, offering stunning views and a rich history.",
        "category": "Historical",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/a/ad/Fort_aguada.jpg"]
    },
    {
        "name": "Basilica of Bom Jesus",
        "description": "The Basilica of Bom Jesus is a UNESCO World Heritage Site, famous for housing the remains of St. Francis Xavier and its beautiful baroque architecture.",
        "category": "Historical",
        "images": ["https://theverda.com/wp-content/uploads/2024/01/IMG_7041.jpg"]
    },
    {
        "name": "Shri Shantadurga Temple",
        "description": "Shri Shantadurga Temple is an important Hindu temple in Goa, dedicated to the goddess Shantadurga, and showcases beautiful Goan temple architecture.",
        "category": "Temples",
        "images": ["https://shreeshantadurga.com/wp-content/uploads/2021/08/t4.jpg"]
    },
    {
        "name": "Mangeshi Temple",
        "description": "Mangeshi Temple is one of the largest and most important temples in Goa, dedicated to Lord Mangesh, and known for its stunning architecture.",
        "category": "Temples",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmg5oHK2UUuD0oHXJ2DacSNs4nsK1TpDS2w&s"]
    }
],

};

function Service() {
    const [destination, setDestination] = useState("");
    const [category, setCategory] = useState("");
    const [popularSpots, setPopularSpots] = useState([]);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      if (name === "destination") setDestination(value);
      if (name === "category") setCategory(value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const spots = (popularSpotsData[destination] || []).filter((spot) =>
        category ? spot.category.toLowerCase() === category.toLowerCase() : true
      );
      setPopularSpots(spots);
    };
  
    const resetForm = () => {
      setDestination("");
      setCategory("");
      setPopularSpots([]);
    };
  
    return (
      <>
        <Navbar />
        <Hero 
          cName="hero-mid"
          heroImg={AboutImage}
          title="Service"
          url="/"
          btnClass="hide"
        />
        <div className="services-description">
          <h2>Find Popular Spots</h2>
          <form onSubmit={handleSubmit} className="search-form">
            <input
              type="text"
              name="destination"
              value={destination}
              onChange={handleInputChange}
              placeholder="Enter destination"
              required
            />
            <select
              name="category"
              value={category}
              onChange={handleInputChange}
            >
              <option value="">All Categories</option>
              <option value="Beaches">Beaches</option>
              <option value="Mountains">Mountains</option>
              <option value="Temples">Temples</option>
              <option value="Historical">Historical</option>
              <option value="Waterfalls">Waterfalls</option>
            </select>
            <button type="submit">Search</button>
          </form>
          <div className="popular-spots">
            {popularSpots.length > 0 ? (
              popularSpots.map((spot, index) => (
                <div key={index} className="spot-card">
                  <img src={spot.images[0]} alt={spot.name} />
                  <h3>{spot.name}</h3>
                  <p>{spot.description}</p>
                  <span className="spot-category">{spot.category}</span>
                </div>
              ))
            ) : (
              <p>No spots found. Please try a different destination or category.</p>
            )}
          </div>
        </div>
      </>
    );
  }
  
  export default Service;
  