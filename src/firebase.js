import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBep0RBqPdFilXUno834Vdelfd7YAQFYkI",
    authDomain: "netflix-clone-145a7.firebaseapp.com",
    projectId: "netflix-clone-145a7",
    storageBucket: "netflix-clone-145a7.appspot.com",
    messagingSenderId: "69528818427",
    appId: "1:69528818427:web:668e65bbc6df8fe737965e",
    measurementId: "G-RMHJGHH7SS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
