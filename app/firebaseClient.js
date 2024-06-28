import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBr2-U_JZpXQvxCSCz1Xk8RSXSn03T90x0",
    authDomain: "mycatrah.firebaseapp.com",
    projectId: "mycatrah",
    storageBucket: "mycatrah.appspot.com",
    messagingSenderId: "63169092692",
    appId: "1:63169092692:web:633807870550d1d32e61c1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, query, where, getDocs };
