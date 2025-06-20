
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAE8iA-5A9teGYiYEjK5aLZ7OuuGN3VFu4",
  authDomain: "aihub-b8c7e.firebaseapp.com",
  projectId: "aihub-b8c7e",
  storageBucket: "aihub-b8c7e.firebasestorage.app",
  messagingSenderId: "481410410497",
  appId: "1:481410410497:web:2eaba164a5a54ac8597800",
  measurementId: "G-3TG9H6GM7F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export default app;
