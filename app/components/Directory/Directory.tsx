import experiences from "@/app/constants";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

import styles from "./Directory.module.scss";

const Directory = () => {
  return (
    <div className={styles.cardContainer}>
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          image={experience.image}
          title={experience.title}
          location={experience.location}
          price={experience.price}
        />
      ))}
    </div>
  );
};

export default Directory;
