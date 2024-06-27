// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC_r3BIvZL19jExbeYNGx25hEgsEghqyno",
    authDomain: "catrah-89fd6.firebaseapp.com",
    projectId: "catrah-89fd6",
    storageBucket: "catrah-89fd6.appspot.com",
    messagingSenderId: "549255532932",
    appId: "1:549255532932:web:2bf3dea42dbeb35d230dd1",
    measurementId: "G-NBLC8X821V"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
