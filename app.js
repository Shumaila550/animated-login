const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple demo validation
    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        // Redirect example:
        // window.location.href = "calculator.html";
    } else {
        form.style.animation = "shake 0.3s";
        setTimeout(() => {
            form.style.animation = "";
        }, 300);
    }
});
