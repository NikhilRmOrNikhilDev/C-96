//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBI-hWXiWidvvnVV3wMlGQwhcESDpkCuIs",
      authDomain: "kwitter-2c4c5.firebaseapp.com",
      databaseURL: "https://kwitter-2c4c5-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c4c5",
      storageBucket: "kwitter-2c4c5.appspot.com",
      messagingSenderId: "354086969446",
      appId: "1:354086969446:web:8e7f90756285fa5e560da7",
      measurementId: "G-X9QPHMT4YD"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
room_name = localStorage.getItem("room_name");
username = localStorage.getItem("username");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}