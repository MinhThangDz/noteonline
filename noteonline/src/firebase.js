import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCnwX30wM0HSijs3KG2K-SpIA-GitfyGQU",
  authDomain: "noteonline-ed608.firebaseapp.com",
  databaseURL: "https://noteonline-ed608-default-rtdb.firebaseio.com",
  projectId: "noteonline-ed608",
  storageBucket: "noteonline-ed608.appspot.com",
  messagingSenderId: "634153670241",
  appId: "1:634153670241:web:82df4f436695dfd735fc20",
  measurementId: "G-JDCQF4F7V3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { db };
