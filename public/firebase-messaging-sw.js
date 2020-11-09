// const { default: firebase } = require("../src/Components/firebase");

importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyBh5vbaSSY6kFHymPfFnhZqEa5mjBpyieM",
  authDomain: "expense-tracker-notifica-ad4c1.firebaseapp.com",
  databaseURL: "https://expense-tracker-notifica-ad4c1.firebaseio.com",
  projectId: "expense-tracker-notifica-ad4c1",
  storageBucket: "expense-tracker-notifica-ad4c1.appspot.com",
  messagingSenderId: "867210983056",
  appId: "1:867210983056:web:8327ba34c1ac9bb2e6ca15"
});

firebase.messaging();