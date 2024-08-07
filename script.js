const correctPassword = "letmein";

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const message = document.getElementById('message');

    if (input === correctPassword) {
        message.textContent = "Access Granted! You've hacked the system!";
        message.style.color = "#00ff00";
    } else {
        message.textContent = "Access Denied! Incorrect password.";
        message.style.color = "#ff0000";
    }
}