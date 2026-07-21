import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwSXH45X60usR3rAn5qGPyZeuRIpS2uhM",
  authDomain: "gen-z-neural-x-3f24a.firebaseapp.com",
  projectId: "gen-z-neural-x-3f24a",
  storageBucket: "gen-z-neural-x-3f24a.firebasestorage.app",
  messagingSenderId: "361864642512",
  appId: "1:361864642512:web:a35e0e5fca30e93a7ac3d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function test() {
  try {
    console.log("Connecting to Firestore...");
    const snapshot = await getDocs(collection(db, 'blogs'));
    console.log(`Found ${snapshot.docs.length} blogs.`);
    snapshot.docs.forEach(doc => console.log(doc.id, doc.data().title));
  } catch (err) {
    console.error("Firebase Error:", err.message);
  }
}
test();
