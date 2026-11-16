import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, get, update, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

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

export { db, ref, set, get, update, onValue };
