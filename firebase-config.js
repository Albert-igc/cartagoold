// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    onSnapshot, 
    updateDoc, 
    collection, 
    arrayUnion 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Tu configuración de Firebase v2
const firebaseConfig = {
    apiKey: "AIzaSyACWDXrHKKUhKY9mxRph9_ayOsRkC1pWpk",
    authDomain: "juego-pareja-v2.firebaseapp.com",
    projectId: "juego-pareja-v2",
    storageBucket: "juego-pareja-v2.firebasestorage.app",
    messagingSenderId: "58465473508",
    appId: "1:58465473508:web:d194ebac4e24226ec5edf1",
    measurementId: "G-9SY61C2MTS"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar las herramientas para que el resto de archivos funcionen
export { db, doc, setDoc, getDoc, onSnapshot, updateDoc, collection, arrayUnion };