import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, update, remove, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YAHAN_APNA_API_KEY_RAKHEN",
  authDomain: "coin-play-7ac49.firebaseapp.com",
  databaseURL: "https://coin-play-7ac49-default-rtdb.firebaseio.com",
  projectId: "coin-play-7ac49",
  storageBucket: "coin-play-7ac49.appspot.com",
  messagingSenderId: "YAHAN_APNA_SENDER_ID",
  appId: "YAHAN_APNA_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider, signInWithPopup, ref, set, get, update, remove, onValue };
