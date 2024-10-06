import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

import PlanItLogo from "../../assets/planit.svg";

const Navbar = () => {
  return (
    <>
      <div className={styles.navigation}>
        <Link href="/" className={styles.logoContainer}>
          LOGO
        </Link>
        <div className={styles.navLinksContainer}>
          <Link href="/" className={styles.navLink}>
            PROFILE
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
