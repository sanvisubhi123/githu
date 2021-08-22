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
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME  " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name- " + Room_names);
                  row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}