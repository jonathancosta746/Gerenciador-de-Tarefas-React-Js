// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9yIzzZE8UF5BmK6rtZ4g_t8LNjBSk_KE",
  authDomain: "gerenciador-de-tarefas-f9ecc.firebaseapp.com",
  projectId: "gerenciador-de-tarefas-f9ecc",
  storageBucket: "gerenciador-de-tarefas-f9ecc.appspot.com",
  messagingSenderId: "305128812334",
  appId: "1:305128812334:web:42f666b4c5015ea97f54bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};