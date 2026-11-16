import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, update, remove, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2XNXfLvE0G0SfU4lxFyh8VO2-kkM_HcA",
  authDomain: "coin-play-7ac49.firebaseapp.com",
  databaseURL: "https://coin-play-7ac49-default-rtdb.firebaseio.com",
  projectId: "coin-play-7ac49",
  storageBucket: "coin-play-7ac49.appspot.com",
  messagingSenderId: "484130715123",
  appId: "1:484130715123:android:bf3a48ab1b5b2de2c54e86"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export {
  app,
  db,
  auth,
  provider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
  ref,
  set,
  get,
  update,
  remove,
  onValue
};
