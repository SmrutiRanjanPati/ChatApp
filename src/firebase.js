
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


// const firebaseConfig = {
//   apiKey :Process.env.REACT_APP_API_KEY,
//   authDomain :Process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL :Process.env.REACT_APP_DATABASE_URL,
//   projectId :Process.env.REACT_APP_PROJECT_ID,
//   storageBucket :Process.env.REACT_APP_STORAGE_BUCKET ,
//   messagingSenderId :Process.env.REACT_APP_MESSAGING_SENDER_ID ,
//   appId :Process.env.REACT_APP_APP_ID,
// };


const firebaseConfig= {
  apiKey: "AIzaSyByz2UlEsfmDpWt7qnN_Ok9ovDcCBRi1Ek",
  authDomain: "chat-web-app-pravas.firebaseapp.com",
  databaseURL :"https://chat-web-app-pravas.firebaseio.com",
  projectId: "chat-web-app-pravas",
  storageBucket: "chat-web-app-pravas.appspot.com",
  messagingSenderId: "419692924836",
  appId: "1:419692924836:web:ac117801c5cc8596043b31"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db =getFirestore(app)
const storage =getStorage(app)

export { auth ,db,storage};