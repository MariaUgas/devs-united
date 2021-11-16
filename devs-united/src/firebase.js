import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe61hCsQljVESsxtpC31CRRbLotcmLQBY",
  authDomain: "dev-united-1.firebaseapp.com",
  projectId: "dev-united-1",
  storageBucket: "dev-united-1.appspot.com",
  messagingSenderId: "271659519814",
  appId: "1:271659519814:web:96a2a493355484a5135f47",
  measurementId: "G-X8ERHBF91D",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
