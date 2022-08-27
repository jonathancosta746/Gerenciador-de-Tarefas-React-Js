// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ66r8BxWyXMmrulmLLLKsaGFAM7v-E50",
  authDomain: "gerenciador-de-tarefas-7047e.firebaseapp.com",
  projectId: "gerenciador-de-tarefas-7047e",
  storageBucket: "gerenciador-de-tarefas-7047e.appspot.com",
  messagingSenderId: "180145229223",
  appId: "1:180145229223:web:124f55445bbb6840daba82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};