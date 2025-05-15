<!DOCTYPE html>
<html lang="en-US">
<head lang="en-US">
    <title>Elijah's Website V2</title>
    <meta charset="UTF-8"/>
    <meta name="description" content="Elijah's Website V2.0, Elijah's Website, Elijah's Website V2">
    <meta name="author" content="Elijah Busch">
    <meta name="copyright" content="Elijah Busch">
    <meta name="title" content="Elijah's Website V2">   
    <meta name="keywords" content="Elijah, Busch, Elijah Busch, Elijah's Website, Elijah's Website V2, Elijah's Website V2.0,">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"/>
    <script src="./script.js"></script>
    <!-- Google tag (gtag.js) --><script type="text/javascript" async src="https://www.googletagmanager.com/gtag/js?id=G-3WDY84G85Z"></script><script type="text/javascript"> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-3WDY84G85Z'); </script>
    <link rel="icon" href="Favicon.ico" type="image/x-icon"/>
    <link href="./style.css" rel="stylesheet" /> 
    <link rel="alternative" href="index.html" type="text/html" />
    <meta name="google-site-verification" content="fBT8TG5y6bvRY4qrRVVRIi8pjZmQotH76whDYn9DxYk" />
    <?php
    function Encode() {
        $toEncode = document.getElementById("toEncode").value;
        $encoded = base64_encode($toEncode);
        $output = `Encoded: $encoded` 
        document.getElementById("encoded").innerHTML = $output;
    }

    function Decode() {
        let toDecode = document.getElementById("toDecode").value;
        let output = document.getElementById("decoded").innerHTML;
        let decoded = window.atob(toDecode);
        output = `Decoded: ${decoded}`
    }
    ?>
</head>
<body id="home" class="darkmode">
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="mc/eag.html">Eaglercraft Launcher</a>
        <a href="Login/login.html" class="split">Sign Up</a>
        <button onclick="alert('Welcome to my website!')">Welcome message</button>
        <button onclick="getLocation()">Location Test</button>
        <a href="/ohwell/index.html">Don't click this</a>
    </div>
    <style>
    </style>
    
    <div id="Main">
        <h1>ESP8266 Web Server</h1>
        <h2>About me</h2>
        <p>I am a 12 year old boy who enjoys programming, electronics, and occasionally enjoy Video games. </p>
        <p>And guess what? I'm learning to code!</p>
        <p>I am hoping to start running this on my esp8266.</p>
        <p>Does anyone else think goguardian is annoying?</p>
        <p>I found a workaround! It's called <a href="https://chromewebstore.google.com/detail/lbhcclgpfpcmhjkghhonpgnkmanigjji?utm_source=item-share-cb" >Finite Browser</a></p>
        <p>It only works on chromebooks though</p>
        <p>I play eaglercraft and my favorite server is <a href="https://eag.hyper-network.net/">Hyper Network</a>. Eagler IP is wss://eag.hyper-network.net. If you find me, Elijah_Busch, add me as a friend!</p>
        <p>My favorite game is Minecraft, and I play on the Java Edition. My username is ElijahB_2012.</p>
        <p>My favorite programming language is Python, and I am learning Javascript.</p>
        <p>My favorite hobby is <a href="https://www.google.com/search?q=programming">Programming</a></p>
        <p>My favorite website is <a href="https:/www.w3schools.com">W3Schools</a></p>
    </div>
    <br>
    <div id="dev">
        <p id=demo></p>
        <h2 style=color:red>UNDER DEVELOPMENT</h2>
        <p>Text to encode:  <input id="toEncode" type="text" value=""></p><button onclick="Encode()">Submit</button><p id="encoded">Encoded: </p>
        <p>Text to decode:  <input id="toDecode" type="text" value=""></p><button onclick="Decode()">Submit</button><p id="decoded">Decoded: </p>

        <label class="switch">
            <input type="checkbox" id="myCheck" onclick="DarkmodeToggle()">
            <span class="slider round"></span>
        </label>
        <p id="text1" style="display:none">Darkmode is ON!</p>
        <p id="text2" style="display:block">Darkmode is OFF!</p>
    </div>
    <footer>
        <p>Hosted by github.dev</p> 
    </footer>
    
</body>
</html>
