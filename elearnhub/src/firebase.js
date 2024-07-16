import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDpXAR-VXXSpByqhF0gAim-YJZGKpWljn8",
  authDomain: "elearnhub-521b1.firebaseapp.com",
  projectId: "elearnhub-521b1",
  storageBucket: "elearnhub-521b1.appspot.com",
  messagingSenderId: "1078525993075",
  appId: "1:1078525993075:web:a3758475c8d44b0eeb4a06",
  measurementId: "G-37HXC678GP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
//const analytics = getAnalytics(app);
export { auth, db, storage };