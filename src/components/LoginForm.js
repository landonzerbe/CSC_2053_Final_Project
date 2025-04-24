import { logIn } from "../utils/auth-functions";

document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  logIn(email, password).then(() => {
    alert("Logged in!");
  }).catch((error) => {
    console.error(error.message);
  });
});
