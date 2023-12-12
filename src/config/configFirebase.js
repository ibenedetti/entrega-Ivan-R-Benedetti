import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "buff-capybara.firebaseapp.com",
  projectId: "buff-capybara",
  storageBucket: "buff-capybara.appspot.com",
  messagingSenderId: "105116914951",
  appId: "1:105116914951:web:25bfe48bb78d27e27161a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;

 