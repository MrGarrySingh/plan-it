import Link from "next/link";
import styles from "./DateCard.module.css";

interface DateCardProps {
  title: string;
  description: string;
  href: string;
}

export default function DateCard({ title, description, href }: DateCardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={href} className={styles.link}>
        Learn More
      </Link>
    </div>
  );
}
