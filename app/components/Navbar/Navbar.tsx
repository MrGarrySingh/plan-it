"use client";

import { useContext } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { UserContext } from "@/app/contexts/userContext";
import { signOutUser } from "@/app/utils/firebase/firebase.utils";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className={styles.navigation}>
        <Link href="/" className={styles.logoContainer}>
          LOGO
        </Link>
        <div className={styles.navLinksContainer}>
          {currentUser ? (
            <span className={styles.navLink} onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className={styles.navLink} href="/authentication">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
