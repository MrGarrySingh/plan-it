import CategoryItem from "../CategoryItem/CategoryItem";

import styles from "./Directory.module.scss";

type Categories = {
  categories: {
    id: string;
    title: string;
    subtitle: string;
    imgUrl: string;
  }[];
};

const Directory = ({ categories }: Categories) => {
  return (
    <div className={styles.directoryContainer}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
