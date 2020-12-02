var name = localStorage.getItem('name');
var email = localStorage.getItem('email');
var phone = localStorage.getItem('phone');
var home = localStorage.getItem('home');
var cruise = localStorage.getItem('cruise');
var comments = localStorage.getItem('comments');
var option = localStorage.getItem('option');
var date = localStorage.getItem('date');
var period = localStorage.getItem('period');

document.getElementById('name').textContent = "Thank You " + name;
document.getElementById('email').textContent = email;
document.getElementById('phone').textContent = phone;
document.getElementById('home').textContent = home;
document.getElementById('cruise').textContent = cruise;
document.getElementById('comments').textContent = comments;
document.getElementById('date').textContent = date;
document.getElementById('period').textContent = period;