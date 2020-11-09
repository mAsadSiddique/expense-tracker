import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBh5vbaSSY6kFHymPfFnhZqEa5mjBpyieM",
  authDomain: "expense-tracker-notifica-ad4c1.firebaseapp.com",
  databaseURL: "https://expense-tracker-notifica-ad4c1.firebaseio.com",
  projectId: "expense-tracker-notifica-ad4c1",
  storageBucket: "expense-tracker-notifica-ad4c1.appspot.com",
  messagingSenderId: "867210983056",
  appId: "1:867210983056:web:8327ba34c1ac9bb2e6ca15"
};
firebase.initializeApp(firebaseConfig);

export default firebase

