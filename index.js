function dropdown_women() {
    var click = document.getElementById("dropdown-women-links");
    if (click.style.display === "none") {
        click.style.display = "flex";
    } else {
        click.style.display = "none";
    }
}

function dropdown_men() {
    var click = document.getElementById("dropdown-men-links");
    if (click.style.display === "none") {
        click.style.display = "flex";
    } else {
        click.style.display = "none";
    }
}

function show_login() {
    var click = document.getElementById("popUp-overlay");
    var fixed = document.getElementById("login-form-container");
    if (click.style.opacity == "0") {
        click.style.zIndex = "101";
        fixed.style.zIndex = "101";
        click.style.opacity = "1";
        fixed.style.opacity = "1";
    } else {
        click.style.zIndex = "-1";
        fixed.style.zIndex = "-1";
        click.style.opacity = "0";
        fixed.style.opacity = "0";
    }
}

function close_login() {
    var click = document.getElementById("popUp-overlay");
    var fixed = document.getElementById("login-form-container");
    click.style.zIndex = "-1";
    fixed.style.zIndex = "-1";
    click.style.opacity = "0";
    fixed.style.opacity = "0";
}

function show_contact() {
    var click = document.getElementById("popUp-overlay");
    var fixed = document.getElementById("contact");
    if (click.style.opacity == "0") {
        click.style.zIndex = "101";
        fixed.style.zIndex = "101";
        click.style.opacity = "1";
        fixed.style.opacity = "1";
    } else {
        click.style.zIndex = "-1";
        fixed.style.zIndex = "-1";
        click.style.opacity = "0";
        fixed.style.opacity = "0";
    }
}

function close_contact() {
    var click = document.getElementById("popUp-overlay");
    var fixed = document.getElementById("contact");
    click.style.zIndex = "-1";
    fixed.style.zIndex = "-1";
    // click.style.opacity = "0";
    fixed.style.opacity = "0";
}

function login_alert() {
    var userName = 'admin@admin.com';
    var pass = 123456;
    var login_email = document.getElementById("email").value;
    var login_pass = document.getElementById("password").value;

    if (login_email == userName && pass == login_pass) {
        alert("Login Successfull");
        var login_btn = document.getElementById("login-btn");
        var logout_btn = document.getElementById("logout-btn");
        login_btn.style.display = "none";
        logout_btn.style.display = "inline-block";
        close_login();
    } else if (login_email != userName && pass == login_pass) {
        alert("Incorrect Email");
    } else if (login_email == userName && pass != login_pass) {
        alert("Incorrect Password");        
    } else {
        alert("Incorrect Email or Password");
    }
}

function logout() {
    var login_btn = document.getElementById("login-btn");
    var logout_btn = document.getElementById("logout-btn");
    login_btn.style.display = "inline-block";
    logout_btn.style.display = "none";
    alert("You were logout sucessfully");
}

