import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, update, remove, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YAHAN_APNI_PURANI_API_KEY_PASTE_KAREIN",
  authDomain: "coin-play-7ac49.firebaseapp.com",
  databaseURL: "https://coin-play-7ac49-default-rtdb.firebaseio.com",
  projectId: "coin-play-7ac49",
  storageBucket: "coin-play-7ac49.appspot.com",
  messagingSenderId: "YAHAN_APNA_SENDER_ID_PASTE_KAREIN",
  appId: "YAHAN_APNA_APP_ID_PASTE_KAREIN"
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
  signInWithRedirect,
  getRedirectResult,
  signOut,
  ref,
  set,
  get,
  update,
  remove,
  onValue
};
