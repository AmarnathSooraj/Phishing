let inputemail = document.getElementById('inputemail');
let formemail = document.getElementById('formemail');
let checkbox = document.getElementById('checkbox');
let inputpass = document.getElementById('pass');
let content = document.getElementById('content');

if (formemail) {
    formemail.addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem("email", inputemail.value);
        window.location.href = "password.html";
    });
}

if (checkbox && inputpass) {
    checkbox.addEventListener('click', () => {
        inputpass.type = (inputpass.type === 'text') ? 'password' : 'text';
    });
}

if (content) {
    let savedEmail = localStorage.getItem("email");
    if (savedEmail) {
        content.innerText = savedEmail;
    }
}
