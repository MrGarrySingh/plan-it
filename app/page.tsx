import DateCard from "./components/DateCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>Select Your Date Experience</h1>
      <div className={styles.cards}>
        {/* Reusable DateCard component with links to individual date pages */}
        <DateCard
          title="Stargazing and Dinner"
          description="A romantic evening under the stars followed by a cozy dinner."
          href="/stargazing"
        />
        <DateCard
          title="Beach Picnic"
          description="Relax by the beach with a curated picnic experience."
          href="/beach-picnic"
        />
        <DateCard
          title="Wine Tasting Tour"
          description="Explore the best local wineries with a guided tour."
          href="/wine-tasting"
        />
      </div>
    </main>
  );
}
