import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCnkIEx3I_L2kPtJmSMX-UEsEZFWpryrHE",
    authDomain: "social-animal-89c3c.firebaseapp.com",
    databaseURL: "https://social-animal-89c3c.firebaseio.com",
    projectId: "social-animal-89c3c",
    storageBucket: "social-animal-89c3c.appspot.com",
    messagingSenderId: "954383310232"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
