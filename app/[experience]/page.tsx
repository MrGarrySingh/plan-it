import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./Experience.module.css";

interface ExperienceProps {
  params: {
    experience: string;
  };
}

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
    image: "https://via.placeholder.com/800x400?text=Barossa+Valley+Wine+Tour",
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
    image: "https://via.placeholder.com/800x400?text=Swan+Valley+Gourmet+Tour",
  },
  {
    title: "Litchfield National Park Adventure",
    description:
      "Explore the stunning waterfalls, swimming holes, and natural wonders of Litchfield National Park.",
    href: "/litchfield-national-park",
    price: 100,
    time: 6,
    location: "Darwin",
    image: "https://via.placeholder.com/800x400?text=Litchfield+National+Park",
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

// Find the experience by the URL slug
const getExperience = (slug: string) => {
  return experiences.find((experience) => experience.href === `/${slug}`);
};

export default function ExperiencePage({ params }: ExperienceProps) {
  const experience = getExperience(params.experience);

  // Handle 404 if experience not found
  if (!experience) {
    notFound();
  }

  return (
    <main>
      <div className={styles.experienceContainer}>
        <h1 className={styles.experienceTitle}>{experience.title}</h1>

        {/* Experience image */}
        <Image
          src={experience.image}
          alt={experience.title}
          width={800}
          height={400}
          className={styles.experienceImage}
        />

        {/* Experience details */}
        <div className={styles.experienceDetails}>
          <p>{experience.description}</p>
          <p>
            <strong>Price:</strong> ${experience.price} per person
          </p>
          <p>
            <strong>Time:</strong> {experience.time} hours
          </p>
          <p>
            <strong>Location:</strong> {experience.location}
          </p>
        </div>

        {/* Call to action */}
        <div className={styles.experienceAction}>
          <button className={styles.bookButton}>Book Now</button>
        </div>
      </div>
    </main>
  );
}
