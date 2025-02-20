import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "",
  authDomain: "consult-b5c33.firebaseapp.com",
  projectId: "consult-b5c33",
  storageBucket: "consult-b5c33.appspot.com",
  messagingSenderId: "",
  appId: ",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const db = getFirestore(app);

export { storage };
