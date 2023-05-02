 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  var firebaseConfig = {
    apiKey: "AIzaSyA3EfEVwtw5ENvyDYKfu9hN29hIcNMjoSY",
    authDomain: "letschat-837ed.firebaseapp.com",
    databaseURL: "https://letschat-837ed-default-rtdb.firebaseio.com",
    projectId: "letschat-837ed",
    storageBucket: "letschat-837ed.appspot.com",
    messagingSenderId: "685315873982",
    appId: "1:685315873982:web:68ababa9cbf3949bab12ef"//, //Remove comma later if necessary.
    //measurementId: "G-EGNRXHZQES" //measurementId is for permanent databases.
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   //firebase.getAnalytics(app); //Analytics will be disabled for the forseable future.
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
