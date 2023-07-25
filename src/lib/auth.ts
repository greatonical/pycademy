import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignUp({ email, password }: { email: string; password: string }) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function Login({ email, password }: { email: string; password: string }) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: any) => {
      // Signed in
      const user = userCredential.user;
      return user
      // ...
    })
    .catch((error:any) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
