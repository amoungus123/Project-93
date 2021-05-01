
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDU8T9lWZEuk9Axdw5pChPOZpfBqilVCXE",
      authDomain: "classtest-7c7fe.firebaseapp.com",
      projectId: "classtest-7c7fe",
      storageBucket: "classtest-7c7fe.appspot.com",
      messagingSenderId: "369166333757",
      appId: "1:369166333757:web:0b6aec348012ff165af754",
      measurementId: "G-7JDEPX6QPC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
