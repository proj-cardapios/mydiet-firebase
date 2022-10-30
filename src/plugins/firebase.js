// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC5OrFUuM9w7cmnJU3zPpE7R4-xokx3W4U",
  authDomain: "mydiet-proj.firebaseapp.com",
  projectId: "mydiet-proj",
  storageBucket: "mydiet-proj.appspot.com",
  messagingSenderId: "188627526140",
  appId: "1:188627526140:web:5e22d9b537c6eafaf0d279"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


const auth = firebase.auth()
const db = firebase.firestore()

const PerfilCollection = db.collection('Perfil')

export {
auth, db, PerfilCollection,
}