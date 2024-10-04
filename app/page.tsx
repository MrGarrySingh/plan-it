"use client"; // This marks the component as a Client Component

import { useState } from "react";
import DateCard from "./components/DateCard";
import styles from "./page.module.css";

export default function Home() {
  const [filters, setFilters] = useState({
    price: 200, // Initial price set to 50 (a quarter of the max 200)
    time: 8, // Initial time set to 2 hours (a quarter of the max 8 hours)
    location: "",
  });

  const experiences = [
    {
      title: "Sydney Harbour Cruise and Dinner",
      description:
        "Take a romantic evening cruise on the Sydney Harbour, followed by a waterfront dinner.",
      href: "/sydney-harbour-cruise",
      price: 120,
      time: 4,
      location: "Sydney",
      image: "https://via.placeholder.com/800x400?text=Sydney+Harbour+Cruise",
    },
    {
      title: "Yarra Valley Wine Tasting and Hot Air Balloon Ride",
      description:
        "Experience a breathtaking hot air balloon ride over the Yarra Valley, followed by a wine tasting.",
      href: "/yarra-valley-balloon",
      price: 180,
      time: 6,
      location: "Melbourne",
      image: "https://via.placeholder.com/800x400?text=Yarra+Valley+Balloon",
    },
    {
      title: "River Kayaking and Picnic",
      description:
        "Enjoy a guided kayaking tour down the Brisbane River, finishing with a picnic in the Botanic Gardens.",
      href: "/brisbane-river-kayaking",
      price: 70,
      time: 3,
      location: "Brisbane",
      image: "https://via.placeholder.com/800x400?text=Brisbane+Kayaking",
    },
    {
      title: "Barossa Valley Wine Tour",
      description:
        "Embark on a wine-tasting journey through the world-renowned Barossa Valley.",
      href: "/barossa-valley-wine-tour",
      price: 150,
      time: 5,
      location: "Adelaide",
      image:
        "https://via.placeholder.com/800x400?text=Barossa+Valley+Wine+Tour",
    },
    {
      title: "Sunset Camel Ride on Cable Beach",
      description:
        "Enjoy a magical sunset camel ride along the pristine sands of Cable Beach in Perth.",
      href: "/cable-beach-camel-ride",
      price: 90,
      time: 2,
      location: "Perth",
      image: "https://via.placeholder.com/800x400?text=Cable+Beach+Camel+Ride",
    },
    {
      title: "Croc Boat Cruise and Dinner",
      description:
        "Cruise along the Adelaide River in Darwin, spotting crocodiles, followed by a riverside dinner.",
      href: "/darwin-croc-cruise",
      price: 95,
      time: 3,
      location: "Darwin",
      image: "https://via.placeholder.com/800x400?text=Darwin+Croc+Boat+Cruise",
    },
    {
      title: "Hot Air Balloon Ride Over Parliament",
      description:
        "Enjoy a sunrise balloon ride with views over Australia’s Parliament House and Lake Burley Griffin.",
      href: "/canberra-balloon-ride",
      price: 170,
      time: 4,
      location: "Canberra",
      image: "https://via.placeholder.com/800x400?text=Canberra+Balloon+Ride",
    },
    {
      title: "Mount Wellington Hiking and Brewery Tour",
      description:
        "Hike to the summit of Mount Wellington, followed by a tour and tasting at a local brewery.",
      href: "/hobart-mount-wellington",
      price: 50,
      time: 5,
      location: "Hobart",
      image: "https://via.placeholder.com/800x400?text=Mount+Wellington+Hiking",
    },
    {
      title: "Bondi to Coogee Coastal Walk and Picnic",
      description:
        "Take a scenic coastal walk from Bondi to Coogee, with a beachside picnic along the way.",
      href: "/bondi-coogee-walk",
      price: 20,
      time: 3,
      location: "Sydney",
      image: "https://via.placeholder.com/800x400?text=Bondi+to+Coogee+Walk",
    },
    {
      title: "Great Ocean Road Tour",
      description:
        "Experience the iconic Great Ocean Road with stops at the 12 Apostles and Loch Ard Gorge.",
      href: "/great-ocean-road-tour",
      price: 130,
      time: 8,
      location: "Melbourne",
      image: "https://via.placeholder.com/800x400?text=Great+Ocean+Road+Tour",
    },
    {
      title: "Story Bridge Climb",
      description:
        "Climb Brisbane’s Story Bridge for panoramic views of the city.",
      href: "/brisbane-story-bridge",
      price: 140,
      time: 2,
      location: "Brisbane",
      image: "https://via.placeholder.com/800x400?text=Story+Bridge+Climb",
    },
    {
      title: "Glenelg Dolphin Cruise and Beach Walk",
      description:
        "Set sail from Glenelg on a dolphin-watching cruise, then take a leisurely walk along Glenelg Beach.",
      href: "/glenelg-dolphin-cruise",
      price: 85,
      time: 3,
      location: "Adelaide",
      image: "https://via.placeholder.com/800x400?text=Glenelg+Dolphin+Cruise",
    },
    {
      title: "Swan Valley Gourmet Food and Wine Tour",
      description:
        "Indulge in a gourmet food and wine tour through Swan Valley, with stops at artisan shops and wineries.",
      href: "/swan-valley-gourmet-tour",
      price: 120,
      time: 5,
      location: "Perth",
      image:
        "https://via.placeholder.com/800x400?text=Swan+Valley+Gourmet+Tour",
    },
    {
      title: "Litchfield National Park Adventure",
      description:
        "Explore the stunning waterfalls, swimming holes, and natural wonders of Litchfield National Park.",
      href: "/litchfield-national-park",
      price: 100,
      time: 6,
      location: "Darwin",
      image:
        "https://via.placeholder.com/800x400?text=Litchfield+National+Park",
    },
    {
      title: "National Gallery Tour and Wine Tasting",
      description:
        "Private tour of the National Gallery of Australia, followed by a wine tasting at a local winery.",
      href: "/canberra-gallery-wine-tour",
      price: 60,
      time: 3,
      location: "Canberra",
      image: "https://via.placeholder.com/800x400?text=National+Gallery+Tour",
    },
  ];

  // Filter logic: checks if an experience matches the filters
  const filteredExperiences = experiences.filter((exp) => {
    return (
      exp.price <= filters.price && // Show experiences with price <= selected price
      exp.time <= filters.time && // Show experiences with time <= selected time
      (filters.location === "" || exp.location === filters.location) // Filter by location if selected
    );
  });

  return (
    <main>
      <h1 className={styles.title}>Find Your Ideal Date Experience</h1>

      {/* Filters */}
      <div className={styles.filters}>
        {/* Price Filter */}
        <div>
          <label htmlFor="price">Max Price: ${filters.price}</label>
          <input
            type="range"
            className={styles.rangeInput}
            id="price"
            min="0"
            max="200"
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, price: Number(e.target.value) })
            }
          />
        </div>

        {/* Time Required Filter */}
        <div>
          <label htmlFor="time">Max Time: {filters.time} hrs</label>
          <input
            type="range"
            className={styles.rangeInput}
            id="time"
            min="1"
            max="8"
            value={filters.time}
            onChange={(e) =>
              setFilters({ ...filters, time: Number(e.target.value) })
            }
          />
        </div>

        {/* Location (Major City) Filter */}
        <div>
          <label htmlFor="location">Location:</label>
          <select
            id="location"
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          >
            <option value="">All</option>
            <option value="Sydney">Sydney</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Brisbane">Brisbane</option>
            <option value="Adelaide">Adelaide</option>
            <option value="Perth">Perth</option>
            <option value="Canberra">Canberra</option>
            <option value="Hobart">Hobart</option>
            <option value="Darwin">Darwin</option>
          </select>
        </div>
      </div>

      {/* Display filtered experiences */}
      <div className={styles.cards}>
        {filteredExperiences.map((exp, index) => (
          <DateCard
            key={index}
            title={exp.title}
            description={exp.description}
            href={exp.href}
          />
        ))}
      </div>
    </main>
  );
}
