import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGM4Bks_-xQxNAkx_K3elfZn8X4Ft7WS8",
  authDomain: "gb-example-2fbcc.firebaseapp.com",
  databaseURL: "https://gb-example-2fbcc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-example-2fbcc",
  storageBucket: "gb-example-2fbcc.appspot.com",
  messagingSenderId: "809081550908",
  appId: "1:809081550908:web:47b731661328ad79e1eb39"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
