function processData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    localStorage.clear();

    localStorage.setItem('name', name);
    localStorage.setItem('email', name);
    localStorage.setItem('message', message);
}