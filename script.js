function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
}

function Encode() {
    let toEncode = document.getElementById("toEncode").value;
    let encoded = window.btoa(toEncode);
    let output = `Encoded: ${encoded}`  
    document.getElementById("encoded").innerHTML = output;
}

function Decode() {
    let toDecode = document.getElementById("toDecode").value;
    let output = document.getElementById("decoded").innerHTML;
    let decoded = window.atob(toDecode);
    output = `Decoded: ${decoded}`
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
var xhr = new XMLHttpRequest(); {
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
