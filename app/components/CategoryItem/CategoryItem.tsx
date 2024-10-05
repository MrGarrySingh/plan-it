import styles from "./CategoryItem.module.scss";

type CategoryItem = {
  category: {
    title: string;
    subtitle: string;
    imgUrl: string;
  };
};

const CategoryItem = ({ category }: CategoryItem) => {
  const { imgUrl, title, subtitle } = category;
  return (
    <div className={styles.categoryContainer}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      <div className={styles.categoryBodyContainer}>
        <h2 className={styles.categoryTitle}>{title}</h2>
        <p className={styles.categorySubtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
