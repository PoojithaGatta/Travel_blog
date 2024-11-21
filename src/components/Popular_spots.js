import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import "./DestinationStyles.css"
import mImage from "./assets/Marina.jpg";
import m1Image from "./assets/Marina1.jpg";
import rImage from "./assets/r1.jpg";
import r1Image from "./assets/r2.jpg";

// Sample data for demonstration. Replace this with a real API call to fetch popular spots.
const popularSpotsData = {
    "Chennai": [
        {
            name: "Marina Beach",
            description: "Marina Beach in Chennai is the longest urban beach in India, stretching over 13 kilometers. Famous for its golden sands and vibrant atmosphere, it's a popular spot for locals and tourists alike. Visitors can enjoy delicious local snacks, engage in activities like horse riding, and marvel at stunning sunsets. The beach is also home to iconic landmarks, including the statue of poet Thiruvalluvar and a historic lighthouse.",
            img1:{mImage},
            img2:{m1Image}
        },
        {
            name: "Central Park",
            description: "A large city park in New York City.",
            image: "https://example.com/central_park.jpg" // Replace with actual image URL
        },
        {
            name: "Times Square",
            description: "Famous for its bright lights and Broadway shows.",
            image: "https://example.com/times_square.jpg" // Replace with actual image URL
        },
    ],
    "Paris": [
        {
            name: "Eiffel Tower",
            description: "An iconic symbol of Paris.",
            image: "https://example.com/eiffel_tower.jpg" // Replace with actual image URL
        },
        {
            name: "Louvre Museum",
            description: "The world's largest art museum.",
            image: "https://example.com/louvre_museum.jpg" // Replace with actual image URL
        },
        {
            name: "Notre-Dame Cathedral",
            description: "A medieval Catholic cathedral.",
            image: "https://example.com/notre_dame.jpg" // Replace with actual image URL
        },
    ],
    // Add more destinations and their popular spots
};

export default Popular_spots;