import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAblxYbXoaSvsVDF9DJjr6SM-cT2xo16tk",
  authDomain: "consult-b5c33.firebaseapp.com",
  projectId: "consult-b5c33",
  storageBucket: "consult-b5c33.appspot.com",
  messagingSenderId: "710843672145",
  appId: "1:710843672145:web:1316225751113bf386ba70",
  measurementId: "G-L5LTBWVEPS"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const db = getFirestore(app);

export { storage };
