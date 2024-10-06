"use client";

import Navbar from "../components/Navbar/Navbar";
import SignUpForm from "../components/SignUpForm/SignUpForm";
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
      <SignUpForm />
    </main>
  );
};

export default SignIn;
