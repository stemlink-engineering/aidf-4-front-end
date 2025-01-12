import { useState } from "react";
import HotelCard from "./HotelCard";
import LocationTab from "./LocationTab";


export default function HotelListings() {

  const hotels = [
    {
      "_id": "6755d5f49a1ea956f3ce2475",
      "name": "Montmartre Majesty Hotel",
      "location": "Paris, France",
      "rating": 4.7,
      "reviews": 2578,
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/297840629.jpg?k=d20e005d5404a7bea91cb5fe624842f72b27867139c5d65700ab7f69396026ce&o=&hp=1",
      "price": 160,
      "description": "Stay in the heart of Paris, France, at the Montmartre Majesty Hotel, where elegance meets charm. Perfect for exploring iconic landmarks like the Eiffel Tower and the Louvre, this hotel offers a tranquil escape from the bustling city. With luxurious rooms starting at $160 per night, enjoy breathtaking rooftop views, exquisite French cuisine, and the romantic ambiance of Montmartre. Ideal for a dreamy city getaway.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce2478",
      "name": "Loire Luxury Lodge",
      "location": "Sydney, Australia",
      "rating": 4.9,
      "reviews": 985,
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/596257607.jpg?k=0b513d8fca0734c02a83d558cbad7f792ef3ac900fd42c7d783f31ab94b4062c&o=&hp=1",
      "price": 350,
      "description": "Overlooking Sydney Harbour, Loire Luxury Lodge provides unmatched waterfront views and a vibrant city experience. From $350 per night, relax in modern luxury while enjoying proximity to Sydney Opera House and Bondi Beach. Whether you’re seeking adventure or relaxation, this hotel offers a harmonious blend of urban excitement and tranquil sophistication.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce2479",
      "name": "Tokyo Tower Inn",
      "location": "Tokyo, Japan",
      "rating": 4.6,
      "reviews": 875,
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/308797093.jpg?k=3a35a30f15d40ced28afacf4b6ae81ea597a43c90c274194a08738f6e760b596&o=&hp=1",
      "price": 180,
      "description": "Discover the vibrant energy of Tokyo at Tokyo Tower Inn, located in the heart of Japan’s bustling capital. For $180 per night, guests can enjoy modern comforts, panoramic city views, and access to iconic attractions like Shibuya Crossing and the Imperial Palace. Ideal for foodies, tech enthusiasts, and urban explorers.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce247a",
      "name": "Sydney Harbour Hotel",
      "location": "Sydney, Australia",
      "rating": 4.8,
      "reviews": 1023,
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/84555265.jpg?k=ce7c3c699dc591b8fbac1a329b5f57247cfa4d13f809c718069f948a4df78b54&o=&hp=1",
      "price": 200,
      "description": "Stay at Sydney Harbour Hotel and wake up to stunning harbour views in one of Australia’s most iconic destinations. Starting at $200 per night, enjoy rooftop dining, modern facilities, and close proximity to Darling Harbour and Sydney’s vibrant nightlife. Ideal for couples and city adventurers.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce247b",
      "name": "Milan Central Suites",
      "location": "Milan, Italy",
      "rating": 4.5,
      "reviews": 670,
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/608273980.jpg?k=c7df20ffb25ae52b6a17037dc13f5e15b94a0fe253a9b9d0b656f6376eabec7d&o=&hp=1",
      "price": 140,
      "description": "Nestled in the fashion capital of Milan, Italy, Milan Central Suites combines style and comfort for an unforgettable stay. At $140 per night, enjoy proximity to the Duomo and Galleria Vittorio Emanuele II, making it perfect for shoppers and culture enthusiasts alike.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce2476",
      "name": "Elysée Retreat",
      "location": "Kyoto, Japan",
      "rating": 4.8,
      "reviews": 1236,
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/606303798.jpg?k=514943d0025704b27396faf82af167468d8b50b98f311668f206f79ca36cb53d&o=&hp=1",
      "price": 150,
      "description": "Immerse yourself in Kyoto’s serene beauty at Elysée Retreat, a sanctuary of peace and tradition. Discover the charm of Japanese gardens, historic temples, and tea ceremonies, all just steps away. For $150 per night, indulge in authentic Kyoto hospitality, minimalistic elegance, and an unforgettable cultural experience tailored for nature lovers and tranquility seekers.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce2477",
      "name": "Versailles Vista Inn",
      "location": "Rome, Italy",
      "rating": 4.7,
      "reviews": 1356,
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/60307464.jpg?k=67ae35316203e2ec82d8e02e0cef883217cce9c436da581528b94ad6dee8e393&o=&hp=1",
      "price": 220,
      "description": "Located in the historic heart of Rome, Italy, Versailles Vista Inn offers a touch of Renaissance luxury. Explore the Colosseum and Vatican City by day and retreat to opulent comfort at night. Starting at $220 per night, guests enjoy fine Italian dining, elegant interiors, and a prime location for experiencing Rome’s timeless culture. Ideal for history buffs and luxury seekers.",
      "__v": 0
    },
    {
      "_id": "6755d5f49a1ea956f3ce247c",
      "name": "Parisian Palace",
      "location": "Paris, France",
      "rating": 4.9,
      "reviews": 2135,
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/308794596.jpg?k=76bbd047a4f3773844efb15819a637f10fb98671244760fcd69cf26d1073b797&o=&hp=1",
      "price": 320,
      "description": "Experience ultimate luxury at Parisian Palace, a gem in the heart of Paris, France. For $320 per night, immerse yourself in timeless elegance with grand interiors, Michelin-star dining, and breathtaking views of the Seine. Perfect for a romantic escape or a refined city retreat.",
      "__v": 0
    }
  ]

  const locations = ["ALL", "France", "Italy", "Australia", "Japan"]

  const [selectedLocation, setSelectedLocation] = useState("ALL");

  const handleSelectedLocation = (location) => {
    setSelectedLocation(location);
  }

  const filteredHotels = selectedLocation === "ALL" ? hotels : hotels.filter((hotel) => {
    return hotel.location.toLowerCase().includes(selectedLocation.toLowerCase());
  })

  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Top trending hotels worldwide
        </h2>

        <p className="text-lg text-muted-foreground">
          Discover the most trending hotels worldwide for an unforgettable
          experience.
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        {
          locations.map((location) => {
            return (<LocationTab selectedLocation={selectedLocation} name={location} onClick={handleSelectedLocation} />)
          })
        }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {
          filteredHotels.map((hotel) => {
            return (<HotelCard key={hotel._id} hotel={hotel} />)
          })
        }
      </div>
    </section>
  );
}
