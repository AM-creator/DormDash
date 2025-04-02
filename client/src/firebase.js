import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dormdash-69b69.firebaseapp.com",
  projectId: "dormdash-69b69",
  storageBucket: "dormdash-69b69.appspot.com",
  messagingSenderId: "594146682923",
  appId: "1:594146682923:web:147fd90a58d3c6e265e26e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
