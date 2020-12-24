import { auth, provider } from "../firebase";

export const signInWithGoogle = async () => {
  let user;
  await auth
    .signInWithPopup(provider)
    .then((res) => {
      user = res.user;
    })
    .catch((e) => {
      console.log(e.message);
    });

  return user;
};

export const logout = async () => {
  let logout_success;
  await auth
    .signOut()
    .then(() => {
      logout_success = true;
    })
    .catch((e) => {
      console.log(e);
    });

  return logout_success;
};
