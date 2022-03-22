import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const SignIn = () => {
  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign in</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        Sign in with google popup
      </Button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;

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
