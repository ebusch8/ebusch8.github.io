<doctype html>
<html lang="en-US">
<head lang="en-US">
    <title>Elijah's Website V2</title>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"/>
    <script src="../script.js"></script>
    <link rel="icon" href="Favicon.ico" type="image/x-icon"/>
    <link href="../style.css" rel="stylesheet" />
    </head>
<body id="home" class="darkmode">
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="../mc/eag.html">Eaglercraft Launcher</a>
        <a href="Login/login.html" class="split">Sign Up</a>
        <button onclick="alert('Welcome to my website!')">Welcome message</button>
        <button onclick="getLocation()">Location Test</button>
        <a href="../ohwell/index.html">Don't click this</a>
    </div>
    <!-- The Modal (contains the Sign Up form) -->
    <div popover id="id01" class="modal">
        <form class="modal-content" onsubmit="" autocomplete="on">
            <div class="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required>
                
                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
                
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
                
                <label>
                    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
                </label>
                <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
                
                <div class="clearfix">
                    <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signup" onclick="logins">Sign Up</button>
                </div>
            </div>
        </form>
    </div>