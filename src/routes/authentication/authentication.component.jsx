import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;

// NEEDED FOR SIGNIN WITH REDIRECT

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";

//   useEffect(async () => {
//     const response = await getRedirectResult(auth);
//     if (response) {
//       const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   }, []);
//   async function logGoogleUser() {
//     const { user } = await signInWithGooglePopup();
//     const userDocRef = await createUserDocumentFromAuth(user);
//   }
