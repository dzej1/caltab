import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
	apiKey: process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID,
});

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
