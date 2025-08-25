document.addEventListener("DOMContentLoaded", () => {
  // =============================
  // 1. Email → Password Flow
  // =============================
  const inputEmail = document.getElementById("inputemail");
  const formEmail = document.getElementById("formemail");
  const checkbox = document.getElementById("checkbox");
  const inputPass = document.getElementById("pass");
  const content = document.getElementById("content");
  const passwordForm = document.getElementById("formpass");

  // Save email + redirect to password page
  if (formEmail && inputEmail) {
    formEmail.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("email", inputEmail.value.trim());
      window.location.href = "password.html";
    });
  }

  // Toggle password visibility
  if (checkbox && inputPass) {
    checkbox.addEventListener("click", () => {
      inputPass.type = inputPass.type === "password" ? "text" : "password";
    });
  }

  // Show saved email on password page
  if (content) {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      content.innerText = savedEmail;
    }
  }

  // Handle password form submit (send to backend)
  if (passwordForm) {
    passwordForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const savedEmail = localStorage.getItem("email");
      const password = inputPass.value;

      const data = { email: savedEmail, password };

      try {
        const res = await fetch("/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        const text = await res.text();
        alert(text); // Show backend response
      } catch (err) {
        alert("❌ Error: " + err.message);
      }
    });
  }
});
