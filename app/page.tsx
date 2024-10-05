"use client"; // This marks the component as a Client Component

import Directory from "./components/Directory/Directory";

const App = () => {
  const categories = [
    {
      id: "1",
      title: "Guided Tours",
      subtitle: "Explore Tours",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1716866637599-5d5c489bdfca?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      title: "Romantic",
      subtitle: "Plan a Date",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1686910560585-288f9d69f07a?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      title: "Wellness",
      subtitle: "Just Relax",
      imgUrl:
        "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      title: "Meetups",
      subtitle: "Create a Meetup",
      imgUrl:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Multiple people enjoying food",
    },
    {
      id: "5",
      title: "Adventure",
      subtitle: "Get Outdoors",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1683120768716-d4242ac2ea4c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main>
      <Directory categories={categories} />;
    </main>
  );
};

export default App;
