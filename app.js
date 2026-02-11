const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Example animation on submit
  form.style.animation = "shake 0.4s ease";

  setTimeout(() => {
    form.style.animation = "";
    alert("Logged In Successfully!");
    // You can redirect after login:
    // window.location.href = "calculator.html";
  }, 400);
});

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-10px); }
  40%, 80% { transform: translateX(10px); }
}
