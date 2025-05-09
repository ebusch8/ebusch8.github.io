function Encode() {
    let toEncode = document.getElementById("toEncode").value;
    let output = document.getElementById("encoded").innerHTML;
    let encoded = window.btoa(toEncode);
    output = `Encoded: ${encoded}` 
}
function darkMode() {
    let element = document.body;
    element.className = "dark-mode";
}
function lightMode() {
    let element = document.body;
    element.className = "light-mode";
}
function DarkmodeToggle() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
    
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
        darkMode()
    } else {
        text.style.display = "none";
        lightMode()
    }
}/*
function DarkmodeToggle() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text2.style.display = "none"'
        text1.style.display = "block";
        darkMode()
    } else {
        text2.style.display = "block"
        text1.style.display = "none";
        lightMode()
    }
}*/

const myJSON = '{"email":"elijah1busch@gmail.com", "password":"Team406m"}';
const myObj = JSON.parse(myJSON);
x = myObj["email", "password"];
document.getElementById("demo").innerHTML = x;

function welcome() {
    // Welcome pop-up
    alert("Welcome to my website!");
}
function getLocation() {
    if (navigator.geolocation) {
        alert(navigator.geolocation.getCurrentPosition(showPosition));
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
function runPythonScript() {
    var data = {
    message: "Hello from HTML!"
};
var xhr = new XMLHttpRequest();
    xhr.open("POST", "main.py", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data)); 
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
