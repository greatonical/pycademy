import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  User,
} from "firebase/auth";
import  {collection,addDoc} from 'firebase/firestore'
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";

export function SignUp(fullName:string, email: string, password: string, func:any) {
  const auth = getAuth();

  const router = useRouter()
  const showModal = false
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      
      const user = userCredential.user;
      // @ts-ignore
      updateProfile(auth.currentUser, {
        displayName: fullName
      }).then(() => {
        console.log(user)
        {func}
        return user;
        // Profile updated!
        // ...
      }).catch((error) => {
        alert(error)
      });
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage);
      alert(error)
      // ..
    });
}

export function Login({ email, password }: { email: string, password: string }) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: any) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
      return user;
      // ...
    })
    .catch((error: any) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function useAuthentication() {
  const auth = getAuth();
  const [user, setUser] = useState<User>();

  React.useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user,
  };
}
