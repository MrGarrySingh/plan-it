"use client"; // This marks the component as a Client Component

import { useParams } from "next/navigation";

export default function DateOptionPage() {
  const { dateOption } = useParams(); // Retrieve the dynamic date option from the URL

  // You can set up content for different date options using a simple switch case or object mapping
  const dateOptionsContent: {
    [key: string]: { title: string; description: string };
  } = {
    stargazing: {
      title: "Stargazing and Dinner",
      description:
        "Spend a romantic evening stargazing and enjoy a cozy dinner at a nearby restaurant.",
    },
    "beach-picnic": {
      title: "Beach Picnic",
      description:
        "Relax at the beach with a curated picnic, featuring gourmet snacks and a sunset view.",
    },
    "wine-tasting": {
      title: "Wine Tasting Tour",
      description:
        "Explore the finest local wineries with a guided tour and wine tasting experience.",
    },
  };

  // Default content if the dateOption is not recognized
  const { title, description } = dateOptionsContent[dateOption as string] || {
    title: "Experience not found",
    description: "Sorry, we could not find details about this experience.",
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
