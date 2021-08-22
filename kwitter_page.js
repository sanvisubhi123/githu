//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBfhL2uYKmQ6pxsW0d1ZKQFzzgzPiKwh9U",
      authDomain: "kwitter-3d31e.firebaseapp.com",
      databaseURL: "https://kwitter-3d31e-default-rtdb.firebaseio.com",
      projectId: "kwitter-3d31e",
      storageBucket: "kwitter-3d31e.appspot.com",
      messagingSenderId: "1039589764306",
      appId: "1:1039589764306:web:a708caa09741e169d1510b",
      measurementId: "G-D1GLG15BG9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send () {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            massage:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}