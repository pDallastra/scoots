let name = localStorage.getItem('name');
let email = localStorage.getItem('email');
let message = localStorage.getItem('message');

document.getElementById('name').textContent = "Thank You " + name;
document.getElementById('email').textContent = "This is the email address we will respond to: " + email;
document.getElementById('message').textContent = `We will answer your message - '${message}' - as soon as possible`;