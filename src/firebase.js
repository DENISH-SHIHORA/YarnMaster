import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj-jNWvcy53zEg6WkXW_VtFsCUa33OAws",
  authDomain: "yarnmaster-f03eb.firebaseapp.com",
  databaseURL: "https://yarnmaster-f03eb-default-rtdb.firebaseio.com",
  projectId: "yarnmaster-f03eb",
  storageBucket: "yarnmaster-f03eb.appspot.com",
  messagingSenderId: "311540135743",
  appId: "1:311540135743:web:cc65ef9eb8d7bf8ac6458a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);     
export const db = getFirestore();

// const querySnapshot = getDocs(collection(db, "RegisterData"));
// querySnapshot.then((doc)=>{console.log(doc.docs.forEach((data)=>{
//   console.log(data.data());
// }));});

// const docRef = addDoc(collection(db, "RegisterData"), {
//   firstname: "Ada",
//   lastname: "Lovelace",
//   email: "denish@denish.com",
//   password: "kjfgbkj",
//   confirmpassword: "bfjsvgbv"
// });
// console.log("Document written with ID: ", docRef.id);

// const citySnapshot = getDocs(collection(db, "RegisterData"));
// citySnapshot.forEach((doc) => {
//   console.log(doc.id);
// });

export default app;
