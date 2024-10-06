import React from "react";
import styles from "./ExperienceCard.module.scss";
import Image from "next/image";

type ExperienceCardProps = {
  image: string;
  title: string;
  location: string;
  price: string;
};

const ExperienceCard = ({
  image,
  title,
  location,
  price,
}: ExperienceCardProps) => {
  return (
    <div className={styles.styledCard}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          className={styles.cardImage}
          height={100}
          width={100}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.location}>{location}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
