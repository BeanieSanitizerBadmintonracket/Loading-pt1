// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaqWF63jvmRScWPfKdclv-Ec4LAbOMvjk",
  authDomain: "kwitter-67302.firebaseapp.com",
  databaseURL: "https://kwitter-67302-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwitter-67302",
  storageBucket: "kwitter-67302.appspot.com",
  messagingSenderId: "1071095164985",
  appId: "1:1071095164985:web:b88b125d720e189e3e9de8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

      user_name = localStorage.getItem("username")
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
