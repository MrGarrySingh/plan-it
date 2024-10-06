import Navbar from "../components/Navbar/Navbar";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import UserSignInForm from "../components/UserSignInForm/UserSignInForm";

import styles from "./Authentication.module.scss";

const Authentication = () => {
  return (
    <main>
      <Navbar />
      <div className={styles.authenticationContainer}>
        <UserSignInForm />
        <SignUpForm />
      </div>
    </main>
  );
};

export default Authentication;
