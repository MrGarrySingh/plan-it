import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.navigation}>
        <Link href="/" className={styles.logoContainer}>
          LOGO
        </Link>
        <div className={styles.navLinksContainer}>
          <Link href="/sign-in" className={styles.navLink}>
            SIGN IN
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
