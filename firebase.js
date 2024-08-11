import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDGrw-VBk8Si-pS7IEFelXLJixPRCPI90A",
    authDomain: "inventory-manager-58088.firebaseapp.com",
    projectId: "inventory-manager-58088",
    storageBucket: "inventory-manager-58088.appspot.com",
    messagingSenderId: "246120301297",
    appId: "1:246120301297:web:b33ca14726ac7687921f50",
    measurementId: "G-TEQV3KB4MB"
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };