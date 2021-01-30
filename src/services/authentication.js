import React, { createContext, useEffect, useContext, useState } from 'react';
import firebase from '../libraries/firebase';
import { createUser, getUsersById, updateUserById } from './user';

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const authWithGoogle = async (role) => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await firebase.auth().signInWithPopup(provider);
    const registeredUser = await getUsersById(result.user.uid);

    if (!registeredUser) {
      console.log('res is null');
      await createUser(result.user, role);
    } else {
      console.log('res is existing');
    }

    setUser({
      uid: result.user.uid,
      email: result.user.email,
      emailVerified: result.user.emailVerified,
      role,
    });

    return result.user;
  };
  /* ANCHOR CHECK IT */
  const authWithFacebook = (role) => {
    let provider = new firebase.auth.FacebookAuthProvider();

    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(async (response) => {
        console.log(response.user);
        console.log(response);
        await getUsersById(response.user.uid).then((res) => {
          console.log(res);
          if (res === null) {
            console.log(res);
            createUser(response.user, role);
            setUser({
              uid: response.user.uid,
              email: response.user.email,
              emailVerified: response.user.emailVerified,
              role,
            });
          } else {
            setUser(res);
          }
        });
        return response.user;
      });
  };
  const sendVerificationEmail = (user) => user.sendEmailVerification();

  const signup = (email, password, role) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        createUser(user, role);

        setUser({
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          facebookVerified: true,
          role,
        });
        return sendVerificationEmail(user);
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  // const sendPasswordResetEmail = (email) => {
  //   return firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // const confirmPasswordReset = (code, password) => {
  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(code, password)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user && user.providerData[0].providerId === 'facebook.com') {
        getUsersById(user.uid).then((response) => {
          updateUserById(user.uid, {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            facebookVerified: true,
          });
          setUser({
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            facebookVerified: true,
          });

          return response;
        });
      } else if (user && user.emailVerified) {
        const registeredUser = await getUsersById(user.uid);
        await updateUserById(user.uid, {
          emailVerified: user.emailVerified,
        });

        setUser((state) => ({
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
          role: registeredUser ? registeredUser.role : state.role,
        }));
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    authWithGoogle,
    authWithFacebook,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
