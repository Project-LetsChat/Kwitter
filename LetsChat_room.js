 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  var firebaseConfig = {
    apiKey: "AIzaSyCh_JWfxBthuwYB4aQZ0iNYAYGbori_Qoc",
    authDomain: "kwitter-7a62a.firebaseapp.com",
    databaseURL: "https://kwitter-7a62a-default-rtdb.firebaseio.com",
    projectId: "kwitter-7a62",
    storageBucket: "kwitter-7a62a.appspot.com",
    messagingSenderId: "316531429429",
    appId: "1:316531429429:web:a8854e48ed3897bf94617c"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding_room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "LetsChat_page.html";


}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name - "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "LetsChat_page.html";
    
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
}
