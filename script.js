console.log("Testing, testing")

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

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
  message: “Hello from HTML!”
};
  var xhr = new XMLHttpRequest();
  xhr.open(“POST”, “run_script.py”, true);
  xhr.setRequestHeader(“Content-Type”, “application/json”);
  xhr.send(JSON.stringify(data));
}

public void init(ServletConfig config) throws ServletException {
            super.init(config);
            ServletContext context = getServletContext();
            applet_code_base = context.getInitParameter("applet_code_base");
            applet_code = context.getInitParameter("applet_code");

          }