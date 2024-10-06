"use client";

import Navbar from "../components/Navbar/Navbar";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <main>
      <Navbar />
      <div>SIGN IN PAGE</div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </main>
  );
};

export default SignIn;
