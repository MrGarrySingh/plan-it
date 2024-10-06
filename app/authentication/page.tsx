import Navbar from "../components/Navbar/Navbar";
import SignInForm from "../components/SignInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";

import styles from "./Authentication.module.scss";

const Authentication = () => {
  return (
    <main>
      <Navbar />
      <div className={styles.authenticationContainer}>
        <SignInForm />
        <SignUpForm />
      </div>
    </main>
  );
};

export default Authentication;
